import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "b0ysie7e",
  base: '/',
  description: "Write ups y Notas de pentesting",
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/78715318',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notas', link: '/notas/pentesting' },
      { text: 'Dev Malware', link: '/malware/keylogger' },
    ],
    sidebar: {
      '/notas/': [
        {
          text: 'WRITE-UP',
          collapsed: true,
          items: [
            { 
              text: 'DockerLabs', 
              collapsed: true,
              items: [
                { text: 'QueueMedic', link: '/notas/dockerlabs/1.QueueMedic/2024-10-8-Queuemedic' },
              ]
            },
            { 
              text: 'Tryhackme', 
              collapsed: true,
              items: [
                { text: 'Mustacchio', link: '/notas/tryhackme/1.Mustacchio/2021-09-04-thm-Mustacchio' },
                { text: 'CMSpit', link: '/notas/tryhackme/2.CMSpit/2022-03-19-CMSpit' },
                { text: 'Bookstore', link: '/notas/tryhackme/4.bookstore/2023-10-10-Bookstore' },
                { text: 'Anonymous', link: '/notas/tryhackme/5.anonymous/2023-10-31-Anonymous' },
                { text: 'Blueprint', link: '/notas/tryhackme/6.blueprint/2023-11-1-Blueprint' },
                { text: 'Fowsniff CTF', link: '/notas/tryhackme/7.fowsniff/2023-11-2-FowSniff' },
                { text: 'Kiba', link: '/notas/tryhackme/8.kiba/2023-11-3-Kiba' },
                { text: 'TechSupport', link: '/notas/tryhackme/9.techsupport1/2023-11-4-TechSupport' },
                { text: 'Corridor', link: '/notas/tryhackme/10.corridor/2023-11-5-Corridor' },
                { text: 'Ninja Skills', link: '/notas/tryhackme/11.ninjaskills/2023-11-5-NinjaSkills' },
                { text: 'Smag Grotto', link: '/notas/tryhackme/12.smaggrotto/2023-11-6-SmagGrotto' },
                { text: 'Glitch', link: '/notas/tryhackme/13.glitch/2023-11-7-Glitch' },
                { text: 'Flatline', link: '/notas/tryhackme/14.flatline/2023-11-8-Flatline' },
                { text: 'Hacker vs Hacker', link: '/notas/tryhackme/15.hackervshacker/2023-11-9-HackervsHacker' },
                { text: 'Valley', link: '/notas/tryhackme/16.valley/2023-11-9-Valley' },
                { text: 'B3dr0ck', link: '/notas/tryhackme/17.b3dr0ck/2023-11-10-b3dr0ck' },
                { text: 'Tony The Tiger', link: '/notas/tryhackme/18.tonythetiger/2023-11-11-TonytheTiger' },
                { text: 'Opacity', link: '/notas/tryhackme/19.opacity/2023-11-12-Opacity' },
                { text: 'Red', link: '/notas/tryhackme/20.RED/2023-11-13-Red' },
                { text: 'Ollie', link: '/notas/tryhackme/21.Ollie/2023-11-20-Ollie' },
                { text: 'Cyber Crafted', link: '/notas/tryhackme/22.CyberCrafted/2023-11-25-CyberCrafted' },
                { text: 'Masterminds', link: '/notas/tryhackme/23.Masterminds/2023-11-30-Masterminds' },
                { text: 'Olympus', link: '/notas/tryhackme/24.Olympus/2023-12-5-Olympus' },
                { text: 'Zeno', link: '/notas/tryhackme/25.Zeno/2023-12-10-Zeno' },
                { text: 'Biteme', link: '/notas/tryhackme/26.biteme/2023-12-16-Biteme' },
                { text: 'The Server From Hell', link: '/notas/tryhackme/27.theServerFromHell/2023-12-21-TheServerFromHell' },
                { text: 'Battery', link: '/notas/tryhackme/28.battery/2023-12-25-Battery' },
                { text: 'Sustah', link: '/notas/tryhackme/29.sustah/2024-01-03-Sustah' },
                { text: 'Splunk PS Eclipse', link: '/notas/tryhackme/30.splunkPsEclipsev2/2024-01-07-splunkPsEclipse' },
                { text: 'Web Strike Blue Team', link: '/notas/tryhackme/31.WebStrikeBlueTeamLab/2024-01-11-WebStrikeBlueTeamLab' },
                { text: 'Gatekeeper', link: '/notas/tryhackme/32.Gatekeeper/2024-01-15-Gatekeeper' },
                { text: 'Willow', link: '/notas/tryhackme/33.Willow/2024-01-25-Wollow' },
                { text: 'Borderlands', link: '/notas/tryhackme/34.Borderlands/2024-02-02-Borderlans' },
                { text: 'Kitty', link: '/notas/tryhackme/35.kitty/2024-02-10-kitty' },
                { text: 'Eavesdropper', link: '/notas/tryhackme/36.Eavesdropper/2024-02-16-Eavesdropper' },
                { text: 'Buffer Overflow Prep', link: '/notas/tryhackme/37.bufferoverflowprep/2024-02-21-bufferoverFlowprep' },
                { text: 'Relevant', link: '/notas/tryhackme/38.Relevant/2024-02-28-Relevant' },
                { text: 'VulnneTroasted', link: '/notas/tryhackme/39.VulnneTroasted/2024-03-01-VulnneTroasted' },
              ]
            },
            { 
              text: 'Hackthebox', 
              collapsed: true,
              items: [
                { text: 'TwoMillion', link: '/notas/hackthebox/1.twomillion/2023-10-10-TwoMillion' },
                { text: 'Validation', link: '/notas/hackthebox/2.validation/2023-02-03-Validation' },
                { text: 'Bounty', link: '/notas/hackthebox//3.bounty/2022-05-03-bounty' },
                { text: 'Doctor', link: '/notas/hackthebox/3.doctor/2022-09-15-Doctor' },
                { text: 'Cap', link: '/notas/hackthebox/4.cap/2021-10-02-HTB-CAP' },
                { text: 'Support', link: '/notas/hackthebox/5.Support/2024-03-04-Support' },
                { text: 'Timelapse', link: '/notas/hackthebox/6.Timelapse/2024-03-05-Timelapse' },
                { text: 'Return', link: '/notas/hackthebox/7.Return/2024-03-06-Return' },
                { text: 'Authority', link: '/notas/hackthebox/8.Authority/2024-03-09-Authority' },
                { text: 'Escape', link: '/notas/hackthebox/9.Escape/2024-03-11-Escape' },
                { text: 'Scrambled', link: '/notas/hackthebox/10.Scrambled/2024-03-15-Scrambled' },
                { text: 'StreamIO', link: '/notas/hackthebox/11.StreamIO/2024-03-20-StreamIO' },
                { text: 'Intelligence', link: '/notas/hackthebox/12.Intelligence/2024-03-24-Intelligence' },
                { text: 'Monteverde', link: '/notas/hackthebox/13.Monteverde/2024-03-26-Monteverde' },
                { text: 'Resolute', link: '/notas/hackthebox/14.Resolute/2024-03-28-Resolute' },
                { text: 'Pov', link: '/notas/hackthebox/15.Pov/2024-07-17-Pov' },
                { text: 'Broker', link: '/notas/hackthebox/16.Broker/2024-07-18-Broker' },
                { text: 'Perfection', link: '/notas/hackthebox/17.Perfection/2024-07-19-Perfection' },
                { text: 'Codify', link: '/notas/hackthebox/18.Codify/2024-07-20-Codify' },
                { text: 'Devvortex', link: '/notas/hackthebox/19.Devvortex/2024-07-21-Devvortex' },
                { text: 'Headless', link: '/notas/hackthebox/20.Headless/2024-07-22-Headless' },
                { text: 'Keeper', link: '/notas/hackthebox/21.Keeper/2024-07-25-Keeper' },
                { text: 'Pilgrimage', link: '/notas/hackthebox/22.Pilgrimage/2024-07-26-Pilgrimage' },
                { text: 'Wifinetic', link: '/notas/hackthebox/23.Wifinetic/2024-07-27-Wifinetic' },
                { text: 'Topology', link: '/notas/hackthebox/24.Topology/2024-07-28-Topology' },
                { text: 'PC', link: '/notas/hackthebox/25.PC/2024-07-29-PC' },
                { text: 'MonitorsTwo', link: '/notas/hackthebox/26.MonitorsTwo/2024-07-30-MonitorsTwo' },
                { text: 'Busqueda', link: '/notas/hackthebox/27.Busqueda/2024-07-31-Busqueda' },
                { text: 'Inject', link: '/notas/hackthebox/28.Inject/2024-08-02-Inject' },
                { text: 'Titanic', link: '/notas/hackthebox/29.Titanic/2025-08-31-Titanic' },
                { text: 'LinkVortex', link: '/notas/hackthebox/30.LinkVortex/3.LinkVortex' },
              ]
            },
            { 
              text: 'PortSwigger', 
              collapsed: true,
              items: [
                {
                  text: 'SQL Injection',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1: SQL injection vulnerability in WHERE clause allowing retrieval of hidden data', link: '/notas/PortSwigger/1.SQL_Injection/1.Lab_SQL_injection_vulnerability_in_WHERE_clause_allowing_retrieval_of_hidden_data/sql_injection_in_where_clause' },
                    { text: 'Lab - 2: SQL injection vulnerability allowing login bypass', link: '/notas/PortSwigger/1.SQL_Injection/2.Lab_SQL_injection_vulnerability_allowing_login_bypass/Lab_SQL_injection_vulnerability_allowing_login_bypass' },
                    { text: 'Lab - 3: SQL injection attack, querying the database type and version on Oracle - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/3.Lab_SQL_injection_attack_querying_the_database_type_and_version_on_Oracle/Lab_SQL_injection_attack_querying_the_database_type_and_version_on_Oracle' },
                    { text: 'Lab - 4: SQL injection attack, querying the database type and version on MySQL and Microsoft - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/4.Lab_SQL_injection_attack_querying_the_database_type_and_version_on_MySQL_and_Microsoft/Lab_SQL_injection_attack_querying_the_database_type_and_version_on_MySQL_and_Microsoft' },
                    { text: 'Lab - 5: SQL injection attack, listing the database contents on non-Oracle databases - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/5.Lab_SQL_injection_attack_listing_the_database_contents_on_non-Oracle_databases/Lab_SQL_injection_attack_listing_the_database_contents_on_non-Oracle_databases' },
                    { text: 'Lab - 6: SQL injection UNION attack, determining the number of columns returned by the query - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/6.Lab_SQL_injection_UNION_attack_determining_the_number_of_columns_returned_by_the_query/Lab_SQL_injection_UNION_attack_determining_the_number_of_columns_returned_by_the_query' },
                    { text: 'Lab - 7: SQL injection UNION attack, retrieving data from other tables - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/7.Lab_SQL_injection_UNION_attack_retrieving_data_from_other_tables/Lab_SQL_injection_UNION_attack_retrieving_data_from_other_tables' },
                    { text: 'Lab - 8: SQL injection UNION attack, retrieving multiple values in a single column - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/8.Lab_SQL_injection_UNION_attack_retrieving_multiple_values_in_a_single_column/Lab_SQL_injection_UNION_attack_retrieving_multiple_values_in_a_single_column' },
                    { text: 'Lab - 9: Blind SQL injection with conditional responses - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/9.Lab_Blind_SQL_injection_with_conditional_responses/Lab_Blind_SQL_injection_with_conditional_responses' },
                    { text: 'Lab - 10: Blind SQL injection with conditional errors - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/10.Lab_Blind_SQL_injection_with_conditional_errors/Blind_SQL_injection_with_conditional_errors' },
                    { text: 'Lab - 11: Visible error-based SQL injection - portswigger', link: '/notas/PortSwigger/1.SQL_Injection/11.Lab_Visible_error-based_SQL_injection/Visible_error-based_SQL_injection' },
                    { text: 'Lab - 12: Blind SQL injection with time delays- portswigger', link: '/notas/PortSwigger/1.SQL_Injection/12.Lab_Blind_SQL_injection_with_time_delays/Blind_SQL_injection_with_time_delays' },
                    { text: 'Lab - 13: Blind SQL injection with time delays and information retrieval', link: '/notas/PortSwigger/1.SQL_Injection/13.Lab_Blind_SQL_injection_with_time_delays_and_information _retrieval/Blind_SQL_injection_with_time_delays_and_information _retrieval' },
                    { text: 'Lab - 14: Blind SQL injection with out-of-band interaction', link: '/notas/PortSwigger/1.SQL_Injection/14.Lab_Blind_SQL_injection_with_out-of-band_interaction/Lab_Blind_SQL_injection_with_out-of-band_interaction' },
                    { text: 'Lab - 15: Blind SQL injection with out-of-band data exfiltration', link: '/notas/PortSwigger/1.SQL_Injection/15.Lab_Blind_SQL_injection_with_out-of-band_data_exfiltration/Blind_SQL_injection_with_out-of-band_data_exfiltration' },
                    { text: 'Lab - 16: SQL injection with filter bypass via XML encoding', link: '/notas/PortSwigger/1.SQL_Injection/16.Lab_SQL_injection_with_filter_bypass_via_XML_encoding/SQL_injection_with_filter_bypass_via_XML_encoding' },
                  ]
                },
                {
                  text: 'Cross-site scripting',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1: Reflected XSS into HTML context with nothing encoded', link: '/notas/PortSwigger/2.Cross-site_scripting/1.Lab_Reflected_XSS_into_HTML_context_with_nothing_encoded/Reflected_XSS_into_HTML_context_with_nothing_encoded' },
                    { text: 'Lab - 2: Stored XSS into HTML context with nothing encoded', link: '/notas/PortSwigger/2.Cross-site_scripting/2.Lab_Stored_XSS_into_HTML_context_with_nothing_encoded/Stored_XSS_into_HTML_context_with_nothing_encoded' },
                    { text: 'Lab - 3: DOM XSS in `document.write` sink using source `location.search`', link: '/notas/PortSwigger/2.Cross-site_scripting/3.Lab_DOM_XSS_in_document.write_sink_using_source_location.search/DOM_XSS_in_document.write_sink_using_source_location.search' },
                    { text: 'Lab - 4: DOM XSS in innerHTML sink using source location.search', link: '/notas/PortSwigger/2.Cross-site_scripting/4.Lab_DOM_XSS_in_innerHTML_sink_using_source_location.search/4.Lab_DOM_XSS_in_innerHTML_sink_using_source_location.search' },
                    { text: 'Lab - 5: DOM XSS in jQuery anchor `href` attribute sink using `location.search` source', link: '/notas/PortSwigger/2.Cross-site_scripting/5.Lab_DOM_XSS_in_jQuery_anchor_href_attribute_sink_using_location.search_source/DOM_XSS_in_jQuery_anchor_href_attribute_sink_using_location.search_source' },
                    { text: 'Lab - 6: DOM XSS in jQuery selector sink using a hashchange event', link: '/notas/PortSwigger/2.Cross-site_scripting/6.Lab_DOM_XSS_in_jQuery_selector_sink_using_a_hashchange_event/DOM_XSS_in_jQuery_selector_sink_using_a_hashchange_event' },
                    { text: 'Lab - 7: Reflected XSS into attribute with angle brackets HTML-encoded', link: '/notas/PortSwigger/2.Cross-site_scripting/7.Lab_Reflected_XSS_into_attribute_with_angle_brackets_HTML-encoded/Reflected_XSS_into_attribute_with_angle_brackets_HTML-encoded'},
                    { text: 'Lab - 8: Stored XSS into anchor `href` attribute with double quotes HTML-encoded', link: '/notas/PortSwigger/2.Cross-site_scripting/8.Lab_Stored_XSS_into_anchor_href_attribute_with_double_quotes_HTML-encoded/Stored_XSS_into_anchor_href_attribute_with_double_quotes_HTML-encoded'},
                    { text: 'Lab - 9: Reflected XSS into a JavaScript string with angle brackets HTML encoded', link: '/notas/PortSwigger/2.Cross-site_scripting/9.Lab_Reflected_XSS_into_a_JavaScript_string_with_angle_brackets_HTML_encoded/Reflected_XSS_into_a_JavaScript_string_with_angle_brackets_HTML_encoded'},
                    { text: 'Lab - 10: DOM XSS in `document.write` sink using source `location.search` inside a select element', link: '/notas/PortSwigger/2.Cross-site_scripting/10.Lab_DOM_XSS_in_document.write_sink_using_source_location.search_inside_a_select-element/DOM_XSS_in_document.write_sink_using_source_location.search_inside_a_select-element'},
                    { text: 'Lab - 11: DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded', link: '/notas/PortSwigger/2.Cross-site_scripting/11.Lab_DOM_XSS_in_AngularJS_expression_with_angle_brackets_and_double_quotes_HTML-encoded/DOM_XSS_in_AngularJS_expression_with_angle_brackets_and_double_quotes_HTML-encoded'},
                    { text: 'Lab - 12: Reflected DOM XSS', link: '/notas/PortSwigger/2.Cross-site_scripting/12.Lab_Reflected_DOM_XSS/Reflected_DOM_XSS'},
                    { text: 'Lab - 13: Stored DOM XSS', link: '/notas/PortSwigger/2.Cross-site_scripting/13.Stored DOM XSS/13.Stored DOM XSS'},
                    { text: 'Lab - 14: Reflected XSS into HTML context with most tags and attributes blocked', link: '/notas/PortSwigger/2.Cross-site_scripting/14.Reflected XSS into HTML context with most tags and attributes blocked/14.Reflected XSS into HTML context with most tags and attributes blocked'},
                    { text: 'Lab - 15: Reflected XSS into HTML context with all tags blocked except custom ones', link: '/notas/PortSwigger/2.Cross-site_scripting/15.Reflected XSS into HTML context with all tags blocked except custom ones/15.Reflected XSS into HTML context with all tags blocked except custom ones'},
                    { text: 'Lab - 16: Reflected XSS with some SVG markup allowed', link: '/notas/PortSwigger/2.Cross-site_scripting/16.Reflected XSS with some SVG markup allowed/16.Reflected XSS with some SVG markup allowed'},
                    { text: 'Lab - 17: Reflected XSS in canonical link tag', link: '/notas/PortSwigger/2.Cross-site_scripting/17.Reflected XSS in canonical link tag/17.Reflected XSS in canonical link tag'},
                    { text: 'Lab - 18: Reflected XSS into a JavaScript string with single quote and backslash escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/18.Reflected XSS into a JavaScript string with single quote and backslash escaped/18.Reflected XSS into a JavaScript string with single quote and backslash escaped'},
                    { text: 'Lab - 19: Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/19.Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped/19.Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped'},
                    { text: 'Lab - 20: Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/20.Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped/20.Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped'},
                    { text: 'Lab - 21: Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/21.Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped/21.Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped'},
                    { text: 'Lab - 22: Exploiting cross-site scripting to steal cookies', link: '/notas/PortSwigger/2.Cross-site_scripting/22.Exploiting cross-site scripting to steal cookies/22.Exploiting cross-site scripting to steal cookies'},
                    { text: 'Lab - 23: Exploiting cross-site scripting to capture passwords', link: '/notas/PortSwigger/2.Cross-site_scripting/23.Exploiting cross-site scripting to capture passwords/23.Exploiting cross-site scripting to capture passwords'},
                    { text: 'Lab - 24: Exploiting XSS to bypass CSRF defenses', link: '/notas/PortSwigger/2.Cross-site_scripting/24.Exploiting XSS to bypass CSRF defenses/24.Exploiting XSS to bypass CSRF defenses'},
                    { text: 'Lab - 25: Reflected XSS protected by very strict CSP, with dangling markup attack', link: '/notas/PortSwigger/2.Cross-site_scripting/25.Reflected XSS protected by very strict CSP, with dangling markup attack/25.Reflected XSS protected by very strict CSP, with dangling markup attack'},
                  ]
                },
                {
                  text: 'CSRF',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : CSRF vulnerability with no defenses', link: '/notas/PortSwigger/3.CSRF/1.CSRF vulnerability with no defenses/1.CSRF vulnerability with no defenses'},
                    { text: 'Lab - 2 : CSRF where token validation depends on request method', link: '/notas/PortSwigger/3.CSRF/2.CSRF where token validation depends on request method/2.CSRF where token validation depends on request method' },
                    { text: 'Lab - 3 : CSRF where token validation depends on token being present', link: '/notas/PortSwigger/3.CSRF/3.CSRF where token validation depends on token being presentken/3.CSRF where token validation depends on token being present'},
                    { text: 'Lab - 4 : CSRF where token is not tied to user session', link: '/notas/PortSwigger/3.CSRF/4.CSRF where token is not tied to user session/4.  CSRF where token is not tied to user session'},
                    { text: 'Lab - 5 : CSRF where token is tied to non-session cookie', link: '/notas/PortSwigger/3.CSRF/5.CSRF where token is tied to non-session cookie/5.CSRF where token is tied to non-session cookie'},
                    { text: 'Lab - 6 : CSRF where token is duplicated in cookie', link: '/notas/PortSwigger/3.CSRF/6.CSRF where token is duplicated in cookie/6.CSRF where token is duplicated in cookie'},
                    { text: 'Lab - 7 : SameSite Lax bypass via method override', link: '/notas/PortSwigger/3.CSRF/7.SameSite Lax bypass via method override/7.SameSite Lax bypass via method override'},
                    { text: 'Lab - 8 : SameSite Strict bypass via client-side redirect', link: '/notas/PortSwigger/3.CSRF/8.SameSite Strict bypass via client-side redirect/8.SameSite Strict bypass via client-side redirect'},
                    { text: 'Lab - 9 : SameSite Strict bypass via sibling domain', link: '/notas/PortSwigger/3.CSRF/9.SameSite Strict bypass via sibling domain/9.SameSite Strict bypass via sibling domain'},
                    { text: 'Lab - 10 :SameSite Lax bypass via cookie refresh', link: '/notas/PortSwigger/3.CSRF/10.SameSite Lax bypass via cookie refresh/10.SameSite Lax bypass via cookie refresh'},
                    { text: 'Lab - 11 :CSRF where Referer validation depends on header being present', link: '/notas/PortSwigger/3.CSRF/11.CSRF where Referer validation depends on header being present/11.CSRF where Referer validation depends on header being present'},
                    { text: 'Lab - 12 :CSRF with broken Referer validation', link: '/notas/PortSwigger/3.CSRF/12.CSRF with broken Referer validation/12.CSRF with broken Referer validation'},
                  ]
                },
                {
                  text: 'Path Traversal',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: 'Authentication vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: 'SSRF',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: 'CORS',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: 'Web Cache Poisoning',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: 'Clickjacking',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '10.DOM-based vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '11.OS Command injection',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '12.Business logic vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '13.File Upload Vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '14.Race conditions',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '15.XML external entity (XXE)',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '16.Server-side template injection (SSTI)',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '17.HTTP request smuggling',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '18.Access control vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '19.WebSockets',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '20.Insecure deserialization',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '21.Information disclosure',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '22.HTTP Host header attacks',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '23.OAuth authentication',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '24.Jwt',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '25.Essential skills',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '26.Prototype pollution',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '27.GraphQL API vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '28.NoSQL injection',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                },
                {
                  text: '29.Web cache deception',
                  collapsed: true,
                  items: [
                    { text: '', link: '' },
                  ]
                }

              ]
            },
          ]
        },
        {
          text: 'NOTAS',
          collapsed: true,
          items: [
            { 
              text: 'Pentesting', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Pentesting Web', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Escalada de privilegios', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Red Team', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
          ]
        },
        {
          text: 'GUIAS Y HERRAMIENTAS',
          collapsed: true,
          items: [
            { 
              text: 'MetaSploit', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Nmap', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Git', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
            { 
              text: 'Fortinet', 
              collapsed: true,
              items: [
                { text: 'Item ', link: '/notas/pentesting-item1' },
                { text: 'Item 2', link: '/notas/pentesting-item2' },
              ]
            },
          ]
        }
      ],
      // Seccion de notas de dev malware
      '/malware/': [
        {
          text: 'Dev Malware',
          items: [
            { text: 'Keylogger', link: '/malware/keylogger' },
          ]
        },
        {
          text: 'Dev Malware',
          items: [
            { text: 'Keylogger', link: '/malware/keylogger' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/b0ysie7e' }
    ]
  }
})