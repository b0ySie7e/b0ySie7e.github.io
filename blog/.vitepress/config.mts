import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "b0ysie7e",
  base: '/',
  ignoreDeadLinks: true,
  description: "Write ups y Notas de pentesting",
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/78715318',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notas', link: '/notas/pentesting' },
      { text: 'Dev Malware', link: '/malware/malware' },
    ],
    sidebar: {
      '/notas/': [
        {
          text: 'WRITE-UP',
          collapsed: false,
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
                    { text: 'Lab - 19: Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/19.Lab/19.Reflected XSS into a JavaScript string with angle brackets and double quotes HTML-encoded and single quotes escaped'},
                    { text: 'Lab - 20: Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/20.Lab/20.Stored XSS into onclick event with angle brackets and double quotes HTML-encoded and single quotes and backslash escaped'},
                    { text: 'Lab - 21: Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped', link: '/notas/PortSwigger/2.Cross-site_scripting/21.Lab/21.Reflected XSS into a template literal with angle brackets, single, double quotes, backslash and backticks Unicode-escaped'},
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
                  text: 'Path_Traversal',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : File path traversal, simple case', link: '/notas/PortSwigger/4.Path_Traversal/1.File path traversal, simple case/1.File path traversal, simple case' },
                    { text: 'Lab - 2 : File path traversal, traversal sequences blocked with absolute path bypass', link: '/notas/PortSwigger/4.Path_Traversal/2.File path traversal, traversal sequences blocked with absolute path bypass/2.File path traversal, traversal sequences blocked with absolute path bypass' },
                    { text: 'Lab - 3 : File path traversal, traversal sequences stripped non-recursively', link: '/notas/PortSwigger/4.Path_Traversal/3.File path traversal, traversal sequences stripped non-recursively/3.File path traversal, traversal sequences stripped non-recursively' },
                    { text: 'Lab - 4 : File path traversal, traversal sequences stripped with superfluous URL-decode', link: '/notas/PortSwigger/4.Path_Traversal/4.File path traversal, traversal sequences stripped with superfluous URL-decode/4.File path traversal, traversal sequences stripped with superfluous URL-decode' },
                    { text: 'Lab - 5 : File path traversal, validation of start of path', link: '/notas/PortSwigger/4.Path_Traversal/5.File path traversal, validation of start of path/5.File path traversal, validation of start of path' },
                    { text: 'Lab - 6 : File path traversal, validation of file extension with null byte bypass', link: '/notas/PortSwigger/4.Path_Traversal/6.File path traversal, validation of file extension with null byte bypass/6.File path traversal, validation of file extension with null byte bypass' },
                  ]
                },
                {
                  text: 'Authentication vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Username enumeration via different responses', link: '/notas/PortSwigger/5.Authentication vulnerabilities/1.Username enumeration via different responses/1.Username enumeration via different responses' },
                    { text: 'Lab - 2 : Username enumeration via subtly different responses', link: '/notas/PortSwigger/5.Authentication vulnerabilities/2.Username enumeration via subtly different responses/2.Username enumeration via subtly different responses' },
                    { text: 'Lab - 3 : Username enumeration via response timing', link: '/notas/PortSwigger/5.Authentication vulnerabilities/3.Username enumeration via response timing/3.Username enumeration via response timing' },
                    { text: 'Lab - 4 : Broken brute-force protection, IP block', link: '/notas/PortSwigger/5.Authentication vulnerabilities/4.Broken brute-force protection, IP block/4.Broken brute-force protection, IP block' },
                    { text: 'Lab - 5 : Username enumeration via account lock', link: '/notas/PortSwigger/5.Authentication vulnerabilities/5.Username enumeration via account lock/5.Username enumeration via account lock' },
                    { text: 'Lab - 6 : 2FA simple bypass', link: '/notas/PortSwigger/5.Authentication vulnerabilities/6.2FA simple bypass/6.2FA simple bypass' },
                    { text: 'Lab - 7 : 2FA broken logic', link: '/notas/PortSwigger/5.Authentication vulnerabilities/7.2FA broken logic/7.2FA broken logic' },
                    { text: 'Lab - 8 : Brute-forcing a stay-logged-in cookie', link: '/notas/PortSwigger/5.Authentication vulnerabilities/8.Brute-forcing a stay-logged-in cookie/8.Brute-forcing a stay-logged-in cookie' },
                    { text: 'Lab - 9 : Offline password cracking', link: '/notas/PortSwigger/5.Authentication vulnerabilities/9.Offline password cracking/9.Offline password cracking' },
                    { text: 'Lab - 10 : Password reset broken logic', link: '/notas/PortSwigger/5.Authentication vulnerabilities/10.Password reset broken logic/10.Password reset broken logic' },
                    { text: 'Lab - 11 : Password reset poisoning via middleware', link: '/notas/PortSwigger/5.Authentication vulnerabilities/11.Password reset poisoning via middleware/11.Password reset poisoning via middleware' },
                    { text: 'Lab - 12 : Password brute-force via password change', link: '/notas/PortSwigger/5.Authentication vulnerabilities/12.Password brute-force via password change/12.Password brute-force via password change' },
                  ]
                },
                {
                  text: 'SSRF',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Basic SSRF against the local server', link: '/notas/PortSwigger/6.SSRF/1.Basic SSRF against the local server/1.Basic SSRF against the local server' },
                    { text: 'Lab - 2 : Basic SSRF against another back-end system', link: '/notas/PortSwigger/6.SSRF/2.Basic SSRF against another back-end system/2.Basic SSRF against another back-end system' },
                    { text: 'Lab - 3 : SSRF with blacklist-based input filter', link: '/notas/PortSwigger/6.SSRF/3.SSRF with blacklist-based input filter/3.SSRF with blacklist-based input filter' },
                    { text: 'Lab - 4 : SSRF with filter bypass via open redirection vulnerability', link: '/notas/PortSwigger/6.SSRF/4.SSRF with filter bypass via open redirection vulnerability/4.SSRF with filter bypass via open redirection vulnerability' },
                    { text: 'Lab - 5 : Blind SSRF with out-of-band detection', link: '/notas/PortSwigger/6.SSRF/5.Blind SSRF with out-of-band detection/5.Blind SSRF with out-of-band detection' },
                  ]
                },
                {
                  text: 'CORS',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : CORS vulnerability with basic origin reflection', link: '/notas/PortSwigger/7.CORS/1.CORS vulnerability with basic origin reflection/1.CORS vulnerability with basic origin reflection' },
                    { text: 'Lab - 2 : CORS vulnerability with trusted null origin', link: '/notas/PortSwigger/7.CORS/2.CORS vulnerability with trusted null origin/2.CORS vulnerability with trusted null origin' },
                    { text: 'Lab - 3 : CORS vulnerability with trusted insecure protocols', link: '/notas/PortSwigger/7.CORS/3.CORS vulnerability with trusted insecure protocols/3.CORS vulnerability with trusted insecure protocols' },
                  ]
                },
                {
                  text: 'Clickjacking',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Basic clickjacking with CSRF token protection', link: '/notas/PortSwigger/9.Clickjacking/1.Basic clickjacking with CSRF token protection/1.Basic clickjacking with CSRF token protection' },
                    { text: 'Lab - 2 : Clickjacking with form input data prefilled from a URL paramete', link: '/notas/PortSwigger/9.Clickjacking/2.Clickjacking with form input data prefilled from a URL paramete/2.Clickjacking with form input data prefilled from a URL paramete' },
                    { text: 'Lab - 3 : lickjacking with a frame buster script', link: '/notas/PortSwigger/9.Clickjacking/3.lickjacking with a frame buster script/3.Clickjacking with a frame buster script' },
                    { text: 'Lab - 4 : Exploiting clickjacking vulnerability to trigger DOM-based XSS', link: '/notas/PortSwigger/9.Clickjacking/4.Exploiting clickjacking vulnerability to trigger DOM-based XSS/4.Exploiting clickjacking vulnerability to trigger DOM-based XSS' },
                    { text: 'Lab - 5 : Multistep clickjacking', link: '/notas/PortSwigger/9.Clickjacking/5.Multistep clickjacking/5. Multistep clickjacking' },
                  ]
                },
                {
                  text: 'DOM-based vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : DOM XSS using web messages', link: '/notas/PortSwigger/10.DOM-based vulnerabilities/1.DOM XSS using web messages/1.DOM XSS using web messages' },
                    { text: 'Lab - 2 : DOM XSS using web messages and a JavaScript URL', link: '/notas/PortSwigger/10.DOM-based vulnerabilities/2.DOM XSS using web messages and a JavaScript URL/2.DOM XSS using web messages and a JavaScript URL' },
                    { text: 'Lab - 3 : DOM XSS using web messages and JSON.parse', link: '/notas/PortSwigger/10.DOM-based vulnerabilities/3.DOM XSS using web messages and JSON.parse/3.DOM XSS using web messages and JSON.parse' },
                    { text: 'Lab - 4 : DOM-based open redirection', link: '/notas/PortSwigger/10.DOM-based vulnerabilities/4.DOM-based open redirection/4.DOM-based open redirection' },
                    { text: 'Lab - 5 : DOM-based cookie manipulation', link: '/notas/PortSwigger/10.DOM-based vulnerabilities/5.DOM-based cookie manipulation/5.DOM-based cookie manipulation' },
                  ]
                },
                {
                  text: 'OS Command injection',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : OS command injection, simple case', link: '/notas/PortSwigger/11.OS Command injection/1.OS command injection, simple case/1.OS command injection, simple case' },
                    { text: 'Lab - 2 : Blind OS command injection with time delays', link: '/notas/PortSwigger/11.OS Command injection/2.Blind OS command injection with time delays/2.Blind OS command injection with time delays' },
                    { text: 'Lab - 3 : Blind OS command injection with output redirection', link: '/notas/PortSwigger/11.OS Command injection/3.Blind OS command injection with output redirection/3.Blind OS command injection with output redirection' },
                    { text: 'Lab - 4 : Blind OS command injection with out-of-band interaction', link: '/notas/PortSwigger/11.OS Command injection/4.Blind OS command injection with out-of-band interaction/4.Blind OS command injection with out-of-band interaction' },
                    { text: 'Lab - 5 : Blind OS command injection with out-of-band data exfiltration', link: '/notas/PortSwigger/11.OS Command injection/5.Blind OS command injection with out-of-band data exfiltration/5.Blind OS command injection with out-of-band data exfiltration' },
                  ]
                },
                {
                  text: 'Business logic vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Excessive trust in client-side controls', link: '/notas/PortSwigger/12.Business logic vulnerabilities/1.Excessive trust in client-side controls/1.Excessive trust in client-side controls' },
                    { text: 'Lab - 2 : High-level logic vulnerability', link: '/notas/PortSwigger/12.Business logic vulnerabilities/2.High-level logic vulnerability/2.High-level logic vulnerability' },
                    { text: 'Lab - 3 : Inconsistent security controls', link: '/notas/PortSwigger/12.Business logic vulnerabilities/3.Inconsistent security controls/3.Inconsistent security controls' },
                    { text: 'Lab - 4 : Flawed enforcement of business rules', link: '/notas/PortSwigger/12.Business logic vulnerabilities/4.Flawed enforcement of business rules/4.Flawed enforcement of business rules' },
                    { text: 'Lab - 5 : Low-level logic flaw', link: '/notas/PortSwigger/12.Business logic vulnerabilities/5.Low-level logic flaw/5.Low-level logic flaw' },
                    { text: 'Lab - 6 : Inconsistent handling of exceptional input', link: '/notas/PortSwigger/12.Business logic vulnerabilities/6. Inconsistent handling of exceptional input/6.Inconsistent handling of exceptional input' },
                    { text: 'Lab - 7 : Inconsistent handling of exceptional input', link: '/notas/PortSwigger/12.Business logic vulnerabilities/7.Inconsistent handling of exceptional input/7.Inconsistent handling of exceptional input' },
                    { text: 'Lab - 8 : Insufficient workflow validation', link: '/notas/PortSwigger/12.Business logic vulnerabilities/8. Insufficient workflow validation/8. Insufficient workflow validation' },
                    { text: 'Lab - 9 : Authentication bypass via flawed state machine', link: '/notas/PortSwigger/12.Business logic vulnerabilities/9.Authentication bypass via flawed state machine/9.Authentication bypass via flawed state machine' },
                    { text: 'Lab - 10 : Infinite money logic flaw', link: '/notas/PortSwigger/12.Business logic vulnerabilities/10.Infinite money logic flaw/10.Infinite money logic flaw' },
                    { text: 'Lab - 11 : Authentication bypass via encryption oracle', link: '/notas/PortSwigger/12.Business logic vulnerabilities/11.Authentication bypass via encryption oracle/11.Authentication bypass via encryption oracle' },
                  ]
                },
                {
                  text: 'File Upload Vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Remote code execution via web shell upload', link: '/notas/PortSwigger/13.File Upload Vulnerabilities/1.Remote code execution via web shell upload/1.Remote code execution via web shell upload' },
                    { text: 'Lab - 2 : Web shell upload via Content-Type restriction bypass', link: '/notas/PortSwigger/13.File Upload Vulnerabilities/2.Web shell upload via Content-Type restriction bypass/2.Web shell upload via Content-Type restriction bypass' },
                    { text: 'Lab - 3 : Web shell upload via path traversal', link: '/notas/PortSwigger/13.File Upload Vulnerabilities/3.Web shell upload via path traversal/3.Web shell upload via path traversal' },
                    { text: 'Lab - 4 : Web shell upload via extension blacklist bypass', link: '/notas/PortSwigger/13.File Upload Vulnerabilities/4.Web shell upload via extension blacklist bypass/4.Web shell upload via extension blacklist bypass' },
                    { text: 'Lab - 5 : Web shell upload via obfuscated file extension', link: '/notas/PortSwigger/13.File Upload Vulnerabilities/5.Web shell upload via obfuscated file extension/5.Web shell upload via obfuscated file extension' },
                    { text: 'Lab - 6 : Remote code execution via polyglot web shell upload', link: '/notas/PortSwigger/13.File Upload Vulnerabilities/6.Remote code execution via polyglot web shell upload/6.Remote code execution via polyglot web shell upload' },
                  ]
                },
                {
                  text: 'Race conditions',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Limit overrun race conditions', link: '/notas/PortSwigger/14.Race conditions/1.Limit overrun race conditions/1.Limit overrun race conditions' },
                    { text: 'Lab - 2 : Bypassing rate limits via race conditions', link: '/notas/PortSwigger/14.Race conditions/2.Bypassing rate limits via race conditions/2.Bypassing rate limits via race conditions' },
                    { text: 'Lab - 3 : Multi-endpoint race conditions', link: '/notas/PortSwigger/14.Race conditions/3.Multi-endpoint race conditions/3.Multi-endpoint race conditions' },
                    { text: 'Lab - 4 : Single-endpoint race conditions', link: '/notas/PortSwigger/14.Race conditions/4.Single-endpoint race conditions/4.Single-endpoint race conditions' },
                    { text: 'Lab - 5 : Exploiting time-sensitive vulnerabilities', link: '/notas/PortSwigger/14.Race conditions/5.Exploiting time-sensitive vulnerabilities/5.Exploiting time-sensitive vulnerabilities' },
                  ]
                },
                {
                  text: 'XML external entity (XXE)',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Exploiting XXE using external entities to retrieve files', link: '/notas/PortSwigger/15.XML external entity (XXE)/1.Exploiting XXE using external entities to retrieve files/1.Exploiting XXE using external entities to retrieve files' },
                    { text: 'Lab - 2 : Exploiting XXE to perform SSRF attacks', link: '/notas/PortSwigger/15.XML external entity (XXE)/2.Exploiting XXE to perform SSRF attacks/2.Exploiting XXE to perform SSRF attacks' },
                    { text: 'Lab - 3 : Blind XXE with out-of-band interaction', link: '/notas/PortSwigger/15.XML external entity (XXE)/3.Blind XXE with out-of-band interaction/3.Blind XXE with out-of-band interaction' },
                    { text: 'Lab - 4 : Blind XXE with out-of-band interaction via XML parameter entities', link: '/notas/PortSwigger/15.XML external entity (XXE)/4.Blind XXE with out-of-band interaction via XML parameter entities/4.Blind XXE with out-of-band interaction via XML parameter entities' },
                    { text: 'Lab - 5 : Exploiting blind XXE to exfiltrate data using a malicious external DTD', link: '/notas/PortSwigger/15.XML external entity (XXE)/5.Exploiting blind XXE to exfiltrate data using a malicious external DTD/5.Exploiting blind XXE to exfiltrate data using a malicious external DTD' },
                    { text: 'Lab - 6 : Exploiting blind XXE to retrieve data via error messages', link: '/notas/PortSwigger/15.XML external entity (XXE)/6.Exploiting blind XXE to retrieve data via error messages/6.Exploiting blind XXE to retrieve data via error messages' },
                    { text: 'Lab - 7 : Exploiting XInclude to retrieve files', link: '/notas/PortSwigger/15.XML external entity (XXE)/7.Exploiting XInclude to retrieve files/7.Exploiting XInclude to retrieve files' },
                    { text: 'Lab - 8 : Exploiting XXE via image file upload', link: '/notas/PortSwigger/15.XML external entity (XXE)/8.Exploiting XXE via image file upload/8.Exploiting XXE via image file upload' },
                  ]
                },
                {
                  text: 'Server-side template injection (SSTI)',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Basic server-side template injection', link: '/notas/PortSwigger/16.Server-side template injection (SSTI)/1.Basic server-side template injection/1.Basic server-side template injection' },
                    { text: 'Lab - 2 : Basic server-side template injection (code context)', link: '/notas/PortSwigger/16.Server-side template injection (SSTI)/2.Basic server-side template injection (code context)/2. Basic server-side template injection (code context)' },
                    { text: 'Lab - 3 : Server-side template injection using documentation', link: '/notas/PortSwigger/16.Server-side template injection (SSTI)/3.Server-side template injection using documentation/3.Server-side template injection using documentation' },
                    { text: 'Lab - 4 : Server-side template injection in an unknown language with a documented exploit', link: '/notas/PortSwigger/16.Server-side template injection (SSTI)/4.Server-side template injection in an unknown language with a documented exploit/4.Server-side template injection in an unknown language with a documented exploit' },
                    { text: 'Lab - 5 : Server-side template injection with information disclosure via user-supplied objects', link: '/notas/PortSwigger/16.Server-side template injection (SSTI)/5.Server-side template injection with information disclosure via user-supplied objects/5.Server-side template injection with information disclosure via user-supplied objects' },
                  ]
                },
                {
                  text: 'HTTP request smuggling',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : HTTP request smuggling, confirming a CL.TE vulnerability via differential responses', link: '/notas/PortSwigger/17.HTTP request smuggling/1.HTTP request smuggling, confirming a CL.TE vulnerability via differential responses/1.HTTP request smuggling, confirming a CL.TE vulnerability via differential responses' },
                    { text: 'Lab - 2 : HTTP request smuggling, confirming a TE.CL vulnerability via differential responses', link: '/notas/PortSwigger/17.HTTP request smuggling/2.HTTP request smuggling, confirming a TE.CL vulnerability via differential responses/2.HTTP request smuggling, confirming a TE.CL vulnerability via differential responses' },
                    { text: 'Lab - 3 : Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability', link: '/notas/PortSwigger/17.HTTP request smuggling/3.Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability/3.Exploiting HTTP request smuggling to bypass front-end security controls, CL.TE vulnerability' },
                    { text: 'Lab - 4 : Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability', link: '/notas/PortSwigger/17.HTTP request smuggling/4.Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability/4.Exploiting HTTP request smuggling to bypass front-end security controls, TE.CL vulnerability' },
                    { text: 'Lab - 5 : Exploiting HTTP request smuggling to reveal front-end request rewriting', link: '/notas/PortSwigger/17.HTTP request smuggling/5.Exploiting HTTP request smuggling to reveal front-end request rewriting/5.Exploiting HTTP request smuggling to reveal front-end request rewriting' },
                    { text: 'Lab - 6 : Exploiting HTTP request smuggling to capture other users requests', link: '/notas/PortSwigger/17.HTTP request smuggling/6.Exploiting HTTP request smuggling to capture other users requests/6.Exploiting HTTP request smuggling to capture other users requests'},
                    { text: 'Lab - 7 : Exploiting HTTP request smuggling to deliver reflected XSS', link: '/notas/PortSwigger/17.HTTP request smuggling/7.Exploiting HTTP request smuggling to deliver reflected XSS/7.Exploiting HTTP request smuggling to deliver reflected XSS' },
                    { text: 'Lab - 8 : Response queue poisoning via H2.TE request smuggling', link: '/notas/PortSwigger/17.HTTP request smuggling/8.Response queue poisoning via H2.TE request smuggling/8.Response queue poisoning via H2.TE request smuggling' },
                    { text: 'Lab - 9 : H2.CL request smuggling', link: '/notas/PortSwigger/17.HTTP request smuggling/9.H2.CL request smuggling/9.H2.CL request smuggling' },
                    { text: 'Lab - 10 : HTTP 2 request smuggling via CRLF injection', link: '/notas/PortSwigger/17.HTTP request smuggling/10.HTTP 2 request smuggling via CRLF injection/10. HTTP 2 request smuggling via CRLF injection' },
                    { text: 'Lab - 11 : HTTP 2 request splitting via CRLF injection', link: '/notas/PortSwigger/17.HTTP request smuggling/11.HTTP 2 request splitting via CRLF injection/11. HTTP 2 request splitting via CRLF injection' },
                    { text: 'Lab - 12 : CL.0 request smuggling', link: '/notas/PortSwigger/17.HTTP request smuggling/12.CL.0 request smuggling/12. CL.0 request smuggling' },
                    { text: 'Lab - 13 : HTTP request smuggling, basic CL.TE vulnerability', link: '/notas/PortSwigger/17.HTTP request smuggling/13.HTTP request smuggling, basic CL.TE vulnerability/13.HTTP request smuggling, basic CL.TE vulnerability' },
                    { text: 'Lab - 14 : HTTP request smuggling, basic TE.CL vulnerability', link: '/notas/PortSwigger/17.HTTP request smuggling/14.HTTP request smuggling, basic TE.CL vulnerability/14.HTTP request smuggling, basic TE.CL vulnerability' },
                    { text: 'Lab - 15 : HTTP request smuggling, obfuscating the TE header', link: '/notas/PortSwigger/17.HTTP request smuggling/15.HTTP request smuggling, obfuscating the TE header/15.HTTP request smuggling, obfuscating the TE header' },
                  ]
                },
                {
                  text: 'Access control vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Unprotected admin functionality', link: '/notas/PortSwigger/18.Access control vulnerabilities/1.Unprotected admin functionality/1.Unprotected admin functionality' },
                    { text: 'Lab - 2 : Unprotected admin functionality with unpredictable URL', link: '/notas/PortSwigger/18.Access control vulnerabilities/2.Unprotected admin functionality with unpredictable URL/2.Unprotected admin functionality with unpredictable URL' },
                    { text: 'Lab - 3 : User role controlled by request parameter', link: '/notas/PortSwigger/18.Access control vulnerabilities/3.User role controlled by request parameter/3.User role controlled by request parameter' },
                    { text: 'Lab - 4 : User role can be modified in user profile', link: '/notas/PortSwigger/18.Access control vulnerabilities/4.User role can be modified in user profile/4.User role can be modified in user profile' },
                    { text: 'Lab - 5 : User ID controlled by request parameter', link: '/notas/PortSwigger/18.Access control vulnerabilities/5.User ID controlled by request parameter/5.User ID controlled by request parameter' },
                    { text: 'Lab - 6 : User ID controlled by request parameter, with unpredictable user IDs', link: '/notas/PortSwigger/18.Access control vulnerabilities/6.User ID controlled by request parameter, with unpredictable user IDs/6.User ID controlled by request parameter, with unpredictable user IDs' },
                    { text: 'Lab - 7 : User ID controlled by request parameter with data leakage in redirect', link: '/notas/PortSwigger/18.Access control vulnerabilities/7.User ID controlled by request parameter with data leakage in redirect/7.User ID controlled by request parameter with data leakage in redirect' },
                    { text: 'Lab - 8 : User ID controlled by request parameter with password disclosure', link: '/notas/PortSwigger/18.Access control vulnerabilities/8. User ID controlled by request parameter with password disclosure/8. User ID controlled by request parameter with password disclosure' },
                    { text: 'Lab - 9 : Insecure direct object references', link: '/notas/PortSwigger/18.Access control vulnerabilities/9.Insecure direct object references/9.Insecure direct object references' },
                    { text: 'Lab - 10 : URL-based access control can be circumvented', link: '/notas/PortSwigger/18.Access control vulnerabilities/10.URL-based access control can be circumvented/10.URL-based access control can be circumvented' },
                    { text: 'Lab - 11 : Method-based access control can be circumvented', link: '/notas/PortSwigger/18.Access control vulnerabilities/11.Method-based access control can be circumvented/11.Method-based access control can be circumvented' },
                    { text: 'Lab - 12 : Multi-step process with no access control on one step', link: '/notas/PortSwigger/18.Access control vulnerabilities/12.Multi-step process with no access control on one step/12.Multi-step process with no access control on one step' },
                    { text: 'Lab - 13 : Referer-based access control', link: '/notas/PortSwigger/18.Access control vulnerabilities/13.Referer-based access control/13.Referer-based access control' },
                  ]
                },
                {
                  text: 'WebSockets',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Manipulating WebSocket messages to exploit vulnerabilities', link: '/notas/PortSwigger/19.WebSockets/1.Manipulating WebSocket messages to exploit vulnerabilities/1.Manipulating WebSocket messages to exploit vulnerabilities' },
                    { text: 'Lab - 2 : Cross-site WebSocket hijacking', link: '/notas/PortSwigger/19.WebSockets/2.Cross-site WebSocket hijacking/2.Cross-site WebSocket hijacking' },
                    { text: 'Lab - 3 : Manipulating the WebSocket handshake to exploit vulnerabilities', link: '/notas/PortSwigger/19.WebSockets/3.Manipulating the WebSocket handshake to exploit vulnerabilities/3.Manipulating the WebSocket handshake to exploit vulnerabilities' },
                  ]
                },
                {
                  text: 'Insecure deserialization',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Modifying serialized objects', link: '/notas/PortSwigger/20.Insecure deserialization/1.Modifying serialized objects/1.Modifying serialized objects' },
                    { text: 'Lab - 2 : Modifying serialized data types', link: '/notas/PortSwigger/20.Insecure deserialization/2.Modifying serialized data types/2.Modifying serialized data types' },
                    { text: 'Lab - 3 : Using application functionality to exploit insecure deserialization', link: '/notas/PortSwigger/20.Insecure deserialization/3.Using application functionality to exploit insecure deserialization/3.Using application functionality to exploit insecure deserialization' },
                    { text: 'Lab - 4 : Arbitrary object injection in PHP', link: '/notas/PortSwigger/20.Insecure deserialization/4.Arbitrary object injection in PHP/4.Arbitrary object injection in PHP' },
                    { text: 'Lab - 5 : Exploiting Java deserialization with Apache Commons', link: '/notas/PortSwigger/20.Insecure deserialization/5.Exploiting Java deserialization with Apache Commons/5.Exploiting Java deserialization with Apache Commons' },
                    { text: 'Lab - 6 : Exploiting PHP deserialization with a pre-built gadget chain', link: '/notas/PortSwigger/20.Insecure deserialization/6.Exploiting PHP deserialization with a pre-built gadget chain/6.Exploiting PHP deserialization with a pre-built gadget chain' },
                    { text: 'Lab - 7 : Exploiting Ruby deserialization using a documented gadget chain', link: '/notas/PortSwigger/20.Insecure deserialization/7.Exploiting Ruby deserialization using a documented gadget chain/7.Exploiting Ruby deserialization using a documented gadget chain' },
                  ]
                },
                {
                  text: 'Information disclosure',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Information disclosure in error messages', link: '/notas/PortSwigger/21.Information disclosure/1.Information disclosure in error messages/1.Information disclosure in error messages' },
                    { text: 'Lab - 2 : Information disclosure on debug page', link: '/notas/PortSwigger/21.Information disclosure/2.Information disclosure on debug page/2.Information disclosure on debug page' },
                    { text: 'Lab - 3 : Source code disclosure via backup files', link: '/notas/PortSwigger/21.Information disclosure/3.Source code disclosure via backup files/3.Source code disclosure via backup files' },
                    { text: 'Lab - 4 : Authentication bypass via information disclosure', link: '/notas/PortSwigger/21.Information disclosure/4.Authentication bypass via information disclosure/4.Authentication bypass via information disclosure' },
                    { text: 'Lab - 5 : Information disclosure in version control history', link: '/notas/PortSwigger/21.Information disclosure/5.Information disclosure in version control history/5.Information disclosure in version control history' },
                  ]
                },
                {
                  text: 'HTTP Host header attacks',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : HTTP Host header attacks', link: '/notas/PortSwigger/22.HTTP Host header attacks/1.HTTP Host header attacks/1.HTTP Host header attacks' },
                    { text: 'Lab - 2 : Host header authentication bypass', link: '/notas/PortSwigger/22.HTTP Host header attacks/2.Host header authentication bypass/2.Host header authentication bypass' },
                    { text: 'Lab - 3 : Web cache poisoning via ambiguous requests', link: '/notas/PortSwigger/22.HTTP Host header attacks/3.Web cache poisoning via ambiguous requests/3.Web cache poisoning via ambiguous requests' },
                    { text: 'Lab - 4 : Routing-based SSRF', link: '/notas/PortSwigger/22.HTTP Host header attacks/4.Routing-based SSRF/4.Routing-based SSRF' },
                    { text: 'Lab - 5 : SSRF via flawed request parsing', link: '/notas/PortSwigger/22.HTTP Host header attacks/5.SSRF via flawed request parsing/5.SSRF via flawed request parsing' },
                    { text: 'Lab - 6 : Host validation bypass via connection state attack', link: '/notas/PortSwigger/22.HTTP Host header attacks/6.Host validation bypass via connection state attack/6.Host validation bypass via connection state attack' },
                  ]
                },
                {
                  text: 'OAuth authentication',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Authentication bypass via OAuth implicit flow', link: '/notas/PortSwigger/23.OAuth authentication/1.Authentication bypass via OAuth implicit flow/1.Authentication bypass via OAuth implicit flow' },
                    { text: 'Lab - 2 : SSRF via OpenID dynamic client registration', link: '/notas/PortSwigger/23.OAuth authentication/2.SSRF via OpenID dynamic client registration/2.SSRF via OpenID dynamic client registration' },
                    { text: 'Lab - 3 : Forced OAuth profile linking', link: '/notas/PortSwigger/23.OAuth authentication/3.Forced OAuth profile linking/3.Forced OAuth profile linking' },
                    { text: 'Lab - 4 : OAuth account hijacking via redirect_uri', link: '/notas/PortSwigger/23.OAuth authentication/4.OAuth account hijacking via redirect_uri/4.OAuth account hijacking via redirect_uri' },
                    { text: 'Lab - 5 : Stealing OAuth access tokens via an open redirect', link: '/notas/PortSwigger/23.OAuth authentication/5.Stealing OAuth access tokens via an open redirect/5.Stealing OAuth access tokens via an open redirect' },
                  ]
                },
                {
                  text: 'Jwt',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : JWT authentication bypass via unverified signature', link: '/notas/PortSwigger/24.Jwt/1.JWT authentication bypass via unverified signature/1.JWT authentication bypass via unverified signature' },
                    { text: 'Lab - 2 : JWT authentication bypass via flawed signature verification', link: '/notas/PortSwigger/24.Jwt/2.JWT authentication bypass via flawed signature verification/2.JWT authentication bypass via flawed signature verification' },
                    { text: 'Lab - 3 : JWT authentication bypass via weak signing key', link: '/notas/PortSwigger/24.Jwt/3.JWT authentication bypass via weak signing key/3.JWT authentication bypass via weak signing key' },
                    { text: 'Lab - 4 : JWT authentication bypass via jwk header injection', link: '/notas/PortSwigger/24.Jwt/4.JWT authentication bypass via jwk header injection/4.JWT authentication bypass via jwk header injection' },
                    { text: 'Lab - 5 : JWT authentication bypass via jku header injection', link: '/notas/PortSwigger/24.Jwt/5.JWT authentication bypass via jku header injection/5.JWT authentication bypass via jku header injection' },
                    { text: 'Lab - 6 : JWT authentication bypass via kid header path traversal', link: '/notas/PortSwigger/24.Jwt/6.JWT authentication bypass via kid header path traversal/6.JWT authentication bypass via kid header path traversal' },
                    { text: 'Lab - 7 : JWT authentication bypass via algorithm confusion', link: '/notas/PortSwigger/24.Jwt/7.JWT authentication bypass via algorithm confusion/7.JWT authentication bypass via algorithm confusion' },
                    { text: 'Lab - 8 : JWT authentication bypass via algorithm confusion with no exposed key', link: '/notas/PortSwigger/24.Jwt/8.JWT authentication bypass via algorithm confusion with no exposed key/8.JWT authentication bypass via algorithm confusion with no exposed key' },
                  ]
                },
                {
                  text: 'Essential skills',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Discovering vulnerabilities quickly with targeted scanning', link: '/notas/PortSwigger/25.Essential skills/1.Discovering vulnerabilities quickly with targeted scanning/1.Discovering vulnerabilities quickly with targeted scanning' },
                    { text: 'Lab - 2 : Scanning non-standard data structures', link: '/notas/PortSwigger/25.Essential skills/2.Scanning non-standard data structures/2.Scanning non-standard data structures' },
                  ]
                },
                {
                  text: 'Prototype pollution',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Client-side prototype pollution via browser APIs', link: '/notas/PortSwigger/26.Prototype pollution/1.Client-side prototype pollution via browser APIs/1.Client-side prototype pollution via browser APIs' },
                    { text: 'Lab - 2 : DOM XSS via client-side prototype pollution', link: '/notas/PortSwigger/26.Prototype pollution/2.DOM XSS via client-side prototype pollution/2.DOM XSS via client-side prototype pollution' },
                    { text: 'Lab - 3 : DOM XSS via an alternative prototype pollution vector', link: '/notas/PortSwigger/26.Prototype pollution/3.DOM XSS via an alternative prototype pollution vector/3.DOM XSS via an alternative prototype pollution vector' },
                    { text: 'Lab - 4 : Client-side prototype pollution via flawed sanitization', link: '/notas/PortSwigger/26.Prototype pollution/4.Client-side prototype pollution via flawed sanitization/4.Client-side prototype pollution via flawed sanitization' },
                    { text: 'Lab - 5 : Client-side prototype pollution in third-party libraries', link: '/notas/PortSwigger/26.Prototype pollution/5.Client-side prototype pollution in third-party libraries/5.Client-side prototype pollution in third-party libraries' },
                    { text: 'Lab - 6 : Privilege escalation via server-side prototype pollution', link: '/notas/PortSwigger/26.Prototype pollution/6.Privilege escalation via server-side prototype pollution/6.Privilege escalation via server-side prototype pollution' },
                    { text: 'Lab - 7 : Detecting server-side prototype pollution without polluted property reflection', link: '/notas/PortSwigger/26.Prototype pollution/7.Detecting server-side prototype pollution without polluted property reflection/7.Detecting server-side prototype pollution without polluted property reflection' },
                    { text: 'Lab - 8 : Bypassing flawed input filters for server-side prototype pollution', link: '/notas/PortSwigger/26.Prototype pollution/8.Bypassing flawed input filters for server-side prototype pollution/8.Bypassing flawed input filters for server-side prototype pollution' },
                    { text: 'Lab - 9 : Remote code execution via server-side prototype pollution', link: '/notas/PortSwigger/26.Prototype pollution/9.Remote code execution via server-side prototype pollution/9.Remote code execution via server-side prototype pollution' },
                  ]
                },
                {
                  text: 'GraphQL API vulnerabilities',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Accessing private GraphQL posts', link: '/notas/PortSwigger/27.GraphQL API vulnerabilities/1.Accessing private GraphQL posts/1.Accessing private GraphQL posts' },
                    { text: 'Lab - 2 : Accidental exposure of private GraphQL fields', link: '/notas/PortSwigger/27.GraphQL API vulnerabilities/2.Accidental exposure of private GraphQL fields/2.Accidental exposure of private GraphQL fields' },
                    { text: 'Lab - 3 : Finding a hidden GraphQL endpoint', link: '/notas/PortSwigger/27.GraphQL API vulnerabilities/3.Finding a hidden GraphQL endpoint/3.Finding a hidden GraphQL endpoint' },
                    { text: 'Lab - 4 : Bypassing GraphQL brute force protections', link: '/notas/PortSwigger/27.GraphQL API vulnerabilities/4.Bypassing GraphQL brute force protections/4.Bypassing GraphQL brute force protections' },
                    { text: 'Lab - 5 : Performing CSRF exploits over GraphQL', link: '/notas/PortSwigger/27.GraphQL API vulnerabilities/5.Performing CSRF exploits over GraphQL/5.Performing CSRF exploits over GraphQL' },
                  ]
                },
                {
                  text: 'NoSQL injection',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Detecting NoSQL injection', link: '/notas/PortSwigger/28.NoSQL injection/1.Detecting NoSQL injection/1.Detecting NoSQL injection' },
                    { text: 'Lab - 2 : Exploiting NoSQL operator injection to bypass authentication', link: '/notas/PortSwigger/28.NoSQL injection/2.Exploiting NoSQL operator injection to bypass authentication/2.Exploiting NoSQL operator injection to bypass authentication' },
                    { text: 'Lab - 3 : Exploiting NoSQL injection to extract data', link: '/notas/PortSwigger/28.NoSQL injection/3.Exploiting NoSQL injection to extract data/3.Exploiting NoSQL injection to extract data' },
                    { text: 'Lab - 4 : Exploiting NoSQL operator injection to extract unknown fields', link: '/notas/PortSwigger/28.NoSQL injection/4.Exploiting NoSQL operator injection to extract unknown fields/4.Exploiting NoSQL operator injection to extract unknown fields' },
                  ]
                },
                {
                  text: 'Web cache deception',
                  collapsed: true,
                  items: [
                    { text: 'Lab - 1 : Exploiting path mapping for web cache deception', link: '/notas/PortSwigger/29.Web cache deception/1.Exploiting path mapping for web cache deception/1.Exploiting path mapping for web cache deception' },
                    { text: 'Lab - 2 : Exploiting path delimiters for web cache deception', link: '/notas/PortSwigger/29.Web cache deception/2.Exploiting path delimiters for web cache deception/2.Exploiting path delimiters for web cache deception' },
                    { text: 'Lab - 3 : Exploiting origin server normalization for web cache deception', link: '/notas/PortSwigger/29.Web cache deception/3.Exploiting origin server normalization for web cache deception/3.Exploiting origin server normalization for web cache deception' },
                    { text: 'Lab - 4 : Exploiting cache server normalization for web cache deception', link: '/notas/PortSwigger/29.Web cache deception/4.Exploiting cache server normalization for web cache deception/4.Exploiting cache server normalization for web cache deception' },
                  ]
                }               

              ]
            },
          ]
        },
        {
          text: 'NOTAS',
          collapsed: false,
          items: [
            {
              text: 'Pentesting',
              collapsed: true,
              items: [
                { text: 'Comandos', link: '/notas/cheatsheet/1.pentesting/1.1.comandos/comandos-windows' },
                { text: 'Enumeracion De Hosts', link: '/notas/cheatsheet/1.pentesting/1.2.enumeracion-de-hosts/Enumeración-de-Hosts' },
                { text: 'Enumeracion de puertos', link: '/notas/cheatsheet/1.pentesting/1.3.enumeracion-de-puertos/Enumeración-de-Puertos' },
                { text: 'Footprinting',
                  collapsed: true,
                  items: [
                    { text: 'Domain Information', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/1.Domain-Information/Domain-information' },
                    { text: 'FTP', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/2.FTP/FTP' },
                    { text: 'SMB', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/3.SMB/SMB' },
                    { text: 'NFS', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/4.NFS/NFS' },
                    { text: 'DNS', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/5.DNS/DNS' },
                    { text: 'SMTP', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/6.SMTP/SMTP' },
                    { text: 'IMAP-POP3', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/7.IMAP-POP3/IMAP-POP3' },
                    { text: 'SNMP', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/8.SNMP/SNMP' },
                    { text: 'MySQL', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/9.MySQL/MySQL' },
                    { text: 'MSSQL', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/10.MSSQL/MSSQL' },
                    { text: 'OracleTNS', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/11.Oracle-TNS/Oracle-TNS' },
                    { text: 'IPMI', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/12.IPMI/IPMI' },
                    { text: 'Linux Remote Management Protocols', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/13.Linux-Remote-Management-Protocols/Linux-Remote-Management-Protocols' },
                    { text: 'Windows Remote Management Protocols', link: '/notas/cheatsheet/1.pentesting/1.4.footprinting/14.Windows-Remote-Management-Protocols/Windows-Remote-Management-Protocols' },
                  ],
                  },
                  { text: 'Buffer', link: '/notas/cheatsheet/1.pentesting/1.5.buffer/BufferOverFlow' },
                  { text: 'Pivoting-tunneling-port-forwarning', 
                    collapsed: true,
                    items: [
                      {text: 'Port Forwarning ssh', link: '/notas/cheatsheet/1.pentesting/1.6.pivoting-tunneling-port-forwarning/1.Port-forwarning-ssh'},
                      {text: 'Pivoting Metasploit', link: '/notas/cheatsheet/1.pentesting/1.6.pivoting-tunneling-port-forwarning/2.Pivoting-Metasploit'},
                      {text: 'Socat Redirection with Reverse Shell', link: '/notas/cheatsheet/1.pentesting/1.6.pivoting-tunneling-port-forwarning/3.Socat-Redirection-with-Reverse-Shell'},
                      {text: 'Socat Redirection with a Bind Shell', link: '/notas/cheatsheet/1.pentesting/1.6.pivoting-tunneling-port-forwarning/4.Socat-Redirection-with-a-Bind-Shell'},
                      {text: 'Others Tools', link: '/notas/cheatsheet/1.pentesting/1.6.pivoting-tunneling-port-forwarning/5.others-tools'}
                    ],

                  },
                  { text: 'Transderencia de Archivos', 
                    collapsed: true,
                    items: [
                      { text: 'Evading Detection', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/1.Evading-Detection/Evading-Detection' },
                      { text: 'Linux File Transfer Methods', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/2.Linux-File-Transfer-Methods/Linux-File-Transfer-Methods' },
                      { text: 'Miscellaneous File Transfer Methods', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/3.Miscellaneous-File-Transfer-Methods/Miscellaneous-File-Transfer-Methods' },
                      { text: 'Transferring Files with Code', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/4.Transferring-Files-with-Code/Transferring-Files-with-Code' },
                      { text: 'Windows-File-Transfer-Methods', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/5.Windows-File-Transfer-Methods/Windows-File-Transfer-Methods' },
                      { text: 'Otros',
                        collapsed: true,
                        items: [
                        { text: 'Usando ICMP', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/6.Otros-metodos/Usando-ICMP/ICMP' },
                        { text: 'Usando Ncat y Tar', link: '/notas/cheatsheet/1.pentesting/1.7.transferencia-de-archivos/6.Otros-metodos/Usando-ncat-y-tar/ncat y tar' },
                        ],
                      }
                    ]
                   },
                  { text: 'Shell Payloads', 
                    collapsed: true,
                    items: [
                      { text: 'Spawning Interactive', link: '/notas/cheatsheet/1.pentesting/1.8.shell-payloads/1.Spawning-Interactive' },
                      { text: 'Conection RDP', link: '/notas/cheatsheet/1.pentesting/1.8.shell-payloads/2.Conection-RDP' },
                    ],

                  },
                  { text: 'Password Attacks', 
                    collapsed: true,
                    items: [
                      {text: 'Cracking',  link: '/notas/cheatsheet/1.pentesting/1.9.password-attacks/1.Cracking'},
                      {text: 'Windows Local Password Attacks',  link: '/notas/cheatsheet/1.pentesting/1.9.password-attacks/2.Windows-Local-Password-Attacks'},
                      {text: 'Linux Local Password Attacks',  link: '/notas/cheatsheet/1.pentesting/1.9.password-attacks/3.Linux-Local-Password-Attacks'},
                      {text: 'Windows-Lateral-Movement',  link: '/notas/cheatsheet/1.pentesting/1.9.password-attacks/4.Windows-Lateral-Movement'}
                    ],

                  },
                  { text: 'Fuerza Bruta', link: '/notas/cheatsheet/1.pentesting/1.10.fuerza-bruta/1.10.fuerza-bruta' },
              ]
            },
            {
              text: 'Pentesting Web',
              collapsed: true,
              items: [
                { text: 'Sqlmap',
                  collapsed: true,
                  items: [
                    { text: 'Database Enumeration', link: '/notas/cheatsheet/2.pentesting_web/1.sqlmap/1.1.database-enumeration' },
                    { text: 'SQLmap', link: '/notas/cheatsheet/2.pentesting_web/1.sqlmap/1.2.sql-map' }
                  ],
                },
                { text: 'Cross Site Scripting', link: '/notas/cheatsheet/2.pentesting_web/2.cross-site-scripting/2.1.cross-site-scripting' },
                { text: 'File Inclusion',
                  collapsed: true,
                  items: [
                    {text: 'File Inclusion', link: '/notas/cheatsheet/2.pentesting_web/3.file-inclusion/3.1.file-inlusion'},
                    {text: 'Remote File Inclusion', link: '/notas/cheatsheet/2.pentesting_web/3.file-inclusion/3.2.remote-file-inclusion'},
                    {text: 'LFI y File Inclusion', link: '/notas/cheatsheet/2.pentesting_web/3.file-inclusion/3.3.lfi-and-file-inclusion'},
                    {text: 'Escaneos Automáticos', link: '/notas/cheatsheet/2.pentesting_web/3.file-inclusion/3.4.escaneos-automatizados'}
                  ]
                
                },
                { text: 'Command Injections',
                  collapsed: true,
                  items: [
                    {text: 'Command Injections',link: '/notas/cheatsheet/2.pentesting_web/4.command-injections/4.1.command-injections'},
                    {text: 'Filter Evasion',link: '/notas/cheatsheet/2.pentesting_web/4.command-injections/4.2.filter-evasion'}
                  ],
                 },
                { text: 'Web Attacks', 
                  collapsed: true,
                  items: [
                    {text: 'Http Verb Tampering', link: '/notas/cheatsheet/2.pentesting_web/5.web-attacks/5.1.http-verb-tampering' },
                    {text: 'IDOR', link: '/notas/cheatsheet/2.pentesting_web/5.web-attacks/5.2.insecure-direct-object-references-idor' },
                    {text: 'XXE', link: '/notas/cheatsheet/2.pentesting_web/5.web-attacks/5.3.xml-external-entity-xxe' }
                  ],
                },
                { text: 'Attacking Common Applications',
                  collapsed:true,
                  items: [
                    {text: 'Enumeración web',link: '/notas/cheatsheet/2.pentesting_web/6.attacking.common-applications/6.1.enumeration-web'},
                    {text: 'Wordpress',link: '/notas/cheatsheet/2.pentesting_web/6.attacking.common-applications/6.2.wordpress'},
                    {text: 'Joomla',link: '/notas/cheatsheet/2.pentesting_web/6.attacking.common-applications/6.3.joomla'},
                    {text: 'Drupal',link: '/notas/cheatsheet/2.pentesting_web/6.attacking.common-applications/6.4.drupal'},
                    {text: 'Tomcat',link: '/notas/cheatsheet/2.pentesting_web/6.attacking.common-applications/6.5.tomcat'},
                    {text: 'Jenkins',link: '/notas/cheatsheet/2.pentesting_web/6.attacking.common-applications/6.6.jenkins'}
                  ],
                },
              ]
            },
            {
              text: 'Escalada de Privilegios',
              collapsed: true,
              items: [
                { text: 'Linux', 
                  collapsed: true,
                  items: [
                    {text: 'Enumeración en Linux', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/1.1.enumeration-linux' },
                    {text: 'Variables de entorno', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/1.2.environment-based' },
                    {text: 'Permisos', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/1.3.permissions-based' },
                    {text: 'Servicios', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/1.4.service-based' },
                    {text: 'Linux Internal', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/1.5.linux-internals-based' },
                    {text: 'Otros', 
                      collapsed: true,
                      items: [
                        {text: 'Enumeración automatizada - Tools', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/1.enumeracion-automatizada-tools' },
                        {text: 'Kernel Exploit', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/2.kernel-exploit' },
                        {text: 'Sudo', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/3.sudo' },
                        {text: 'SUID', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/4.suid' },
                        {text: 'Capabilities', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/5.capabilities' },
                        {text: 'Cron Jobs', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/6.cron-jobs' },
                        {text: 'Path', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/7.path' },
                        {text: 'NFS', link: '/notas/cheatsheet/3.escalada_de_privilegios/1.linux/otros/8.nfs' }

                      ],
                    }
                  ],
                },
                { text: 'Windows', 
                  collapsed: true,
                  items: [
                    {text: 'Enumeracion en Windows', link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/2.1.enumeration-windows' },
                    {text: 'Windows User Privilege', link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/2.2.windows-user-privileges' },
                    {text: 'Windows Group Privilege', link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/2.3.windows-group-privileges' },
                    {text: 'Attacking the OS', link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/2.4.attacking-the-os' },
                    {text: 'Credetial Hunting', link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/2.5.credentials-hunting' },
                    {text: 'Otros', 
                      collapsed: true,
                      items: [
                        {text: 'Enumeración automatizada - Tools',   link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/otros/1.enumeracion-automatizada-tools' },
                        {text: 'Harvesting Passwords from Usual Spots',   link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/otros/2.harvesting-passwords-from-usual-spots' },
                        {text: 'Other Quick Wins',   link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/otros/3.other-quick-wins' },
                        {text: 'Abusing Service Misconfigurations',   link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/otros/4.abusing-service-misconfigurations' },
                        {text: 'Abusing dangerous privileges',   link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/otros/5.abusing-dangerous-privileges' },
                        {text: 'Abusing vulnerable software',   link: '/notas/cheatsheet/3.escalada_de_privilegios/2.windows/otros/6.abusing-vulnerable-software' }
                      ],
                    }
                  ],
                },
              ]
            },
          ]
        },
        {
          text: 'GUIAS Y HERRAMIENTAS',
          collapsed: false,
          items: [
            { 
              text: 'MetaSploit', 
              collapsed: true,
              items: [
                { text: 'Introducción', link: '/notas/guias-herramientas/1.metasploit/1.Introducción' },
                { text: 'Modules', link: '/notas/guias-herramientas/1.metasploit/2.Modules' },
                { text: 'Targets', link: '/notas/guias-herramientas/1.metasploit/3.Targets' },
                { text: 'Payloads', link: '/notas/guias-herramientas/1.metasploit/4.Payloads' },
                { text: 'Encoders', link: '/notas/guias-herramientas/1.metasploit/5.Encoders' },
                { text: 'Sessions', link: '/notas/guias-herramientas/1.metasploit/6.Sessions' },
              ]
            },
            { text: 'Nmap',link: '/notas/guias-herramientas/2.nmap/nmap' },
            { text: 'Git', link: '/notas/guias-herramientas/3.git/1.git'},
            {
              text: 'Fortinet',
              collapsed: true,
              items: [
                { text: 'Configuracion Estatica de FW', link: '/notas/guias-herramientas/4.fortinet/1.ConfiguracionEstaticadeFW/ConfiguracionestaticadeFirewall' },
                { text: 'Licenciadel Firewall', link: '/notas/guias-herramientas/4.fortinet/2.LicenciadelFirewall/Licencia' },
                { text: 'Configuracion de Interfaces', link: '/notas/guias-herramientas/4.fortinet/3.Configuraciondeinterfaces/ConfiguraciondeInterfaces' },
                { text: 'Creando Politicas', link: '/notas/guias-herramientas/4.fortinet/4.Creandopoliticas/PrimeraPolitica' },
                { text: 'Rutas Estaticas', link: '/notas/guias-herramientas/4.fortinet/5.Rutasestaticas/RutasEstaticas' },
              ]
            },
            {text: 'Metodología', link : '/notas/guias-herramientas/5.Metodologia/1.metodologia'},

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