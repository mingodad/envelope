
// snippets are in the textmate format more info:
//      http://blog.macromates.com/2005/the-power-of-snippets/

window.addEventListener('design-register-element', function () {
    // uncategorized snippets
    registerDesignSnippet('Lorem Ipsum', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    
    registerDesignSnippet('Document Start', 'Document Start', '<!DOCTYPE html>\n' +
                                                              '<html>\n' +
                                                              '    <head>\n' +
                                                              '        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' +
                                                              '        <meta name="apple-mobile-web-app-capable" content="yes" />\n' +
                                                              '        <meta name="apple-mobile-web-app-status-bar-style" content="black" />\n' +
                                                              '        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />\n' +
                                                              '        \n' +
                                                              '        <title>${1:New Page}</title>\n' +
                                                              '        \n' +
                                                              '        <script src="/js/greyspots.js" type="text/javascript"></script>\n' +
                                                              '        <link href="/css/greyspots.css" type="text/css" rel="stylesheet" />\n' +
                                                              '    </head>\n' +
                                                              '    <body>\n' +
                                                              '        $0\n' +
                                                              '    </body>\n' +
                                                              '</html>');
    

    registerDesignSnippet('Centered H1', 'Centered H1', '<center><h1>$0</h1></center>');
    registerDesignSnippet('Centered H2', 'Centered H2', '<center><h2>$0</h2></center>');
    registerDesignSnippet('Centered H3', 'Centered H3', '<center><h3>$0</h3></center>');
    registerDesignSnippet('Centered H4', 'Centered H4', '<center><h4>$0</h4></center>');
    registerDesignSnippet('Centered H5', 'Centered H5', '<center><h5>$0</h5></center>');
    registerDesignSnippet('Centered H6', 'Centered H6', '<center><h6>$0</h6></center>');
    
    
    // javascript snippets
    registerDesignSnippet('Window Load', 'window.addEventListener', 'window.addEventListener(\'load\', function () {\n' +
                                                                    '    $0\n' +
                                                                    '});');
    
    registerDesignSnippet('Delete Function', 'delete', 'function delete${1:Contact}() {\n' +
                                                       '    GS.dialog({\n' +
                                                       '        \'header\': \'Are You Sure...\',\n' +
                                                       '        \'content\': \'<center><h4>Are you sure you want to delete this ${2:contact}?</h4></center>\',\n' +
                                                       '        \'buttons\': [\'no\', \'yes\'],\n' +
                                                       '        \'after_close\': function (event, strAnswer) {\n' +
                                                       '            if (strAnswer === \'yes\') {\n' +
                                                       '                GS.addLoader(\'${3:contact}-delete\', \'Deleting ${4:Contact}...\');\n' +
                                                       '                GS.ajaxJSON(\'/v1/env/action_delete\', \'src=adr.tcard_header&id=\' + ${5:GS.qryGetVal(GS.getQueryString(), \'id\')},\n' +
                                                       '                                                                                                            function (data, error) {\n' +
                                                       '                    GS.removeLoader(\'${3:contact}-delete\');\n' +
                                                       '                    \n' +
                                                       '                    if (!error) {\n' +
                                                       '                        // refresh\n' +
                                                       '                        $0\n' +
                                                       '                    } else {\n' +
                                                       '                        GS.ajaxErrorDialog(data);\n' +
                                                       '                    }\n' +
                                                       '                });\n' +
                                                       '            }\n' +
                                                       '        }\n' +
                                                       '    });\n' +
                                                       '}');

    registerDesignSnippet('Insert Function', 'insert', 'function insert${1:Contact}() {\n' +
                                                          '    GS.dialog({\n' +
                                                          '        \'header\': \'New ${1:Contact}\',\n' +
                                                          '        \'content\': ml(function () {/*\n' +
                                                          '                        <gs-insert src="${2:adr.tcard_header}" id="insert-${3:contact}-form">\n' +
                                                          '                            <label for="insert-text-${4:first_name}">${5:First Name}:</label>\n' +
                                                          '                            <gs-text id="insert-text-${4:first_name}" column="${4:first_name}"></gs-text>\n' +
                                                          '                        </gs-insert>\n' +
                                                          '                    */}),\n' +
                                                          '        \'buttons\': [\'cancel\', \'create\'],\n' +
                                                          '        \'before_close\': function (event, strAnswer) {\n' +
                                                          '            if (strAnswer === \'create\') {\n' +
                                                          '                document.getElementById(\'#insert-${3:contact}-form\').submit(function (newID) {\n' +
                                                          '                    if (!error) {\n' +
                                                          '                        // refresh\n' +
                                                          '                        $0\n' +
                                                          '                    } else {\n' +
                                                          '                        GS.ajaxErrorDialog(data);\n' +
                                                          '                    }\n' +
                                                          '                });\n' +
                                                          '            }\n' +
                                                          '        }\n' +
                                                          '    });\n' +
                                                          '}');

    
    // HTML snippets
    registerDesignSnippet('<style>', '<style>', 'style>\n' +
                                                '    $0\n' +
                                                '</style>');
    registerDesignSnippet('<script>', '<script>', 'script>\n' +
                                                  '    $0\n' +
                                                  '</script>');
    registerDesignSnippet('<link>', '<link>', 'link href="${1}" type="text/css" rel="stylesheet" />');
    
    
    // CSS snippets
    registerDesignSnippet('Curved Borders', 'Curved Borders', '-webkit-border-radius: ${1:50%};\n' +
                                                             '-moz-border-radius: ${1:50%};\n' +
                                                             '-ms-border-radius: ${1:50%};\n' +
                                                             '-o-border-radius: ${1:50%};\n' +
                                                             'border-radius: ${1:50%};');
    registerDesignSnippet('border-radius', 'border-radius', '-webkit-border-radius: ${1:50%};\n' +
                                                             '-moz-border-radius: ${1:50%};\n' +
                                                             '-ms-border-radius: ${1:50%};\n' +
                                                             '-o-border-radius: ${1:50%};\n' +
                                                             'border-radius: ${1:50%};');
    registerDesignSnippet('box-sizing', 'box-sizing', '-webkit-box-sizing: ${1:border-box};\n' +
                                                      '-moz-box-sizing: ${1:border-box};\n' +
                                                      '-ms-box-sizing: ${1:border-box};\n' +
                                                      '-o-box-sizing: ${1:border-box};\n' +
                                                      'box-sizing: ${1:border-box};');
    registerDesignSnippet('transform', 'transform', '-webkit-transform: ${1:rotate(42deg)};\n' +
                                                    '-moz-transform: ${1:rotate(42deg)};\n' +
                                                    '-ms-transform: ${1:rotate(42deg)};\n' +
                                                    '-o-transform: ${1:rotate(42deg)};\n' +
                                                    'transform: ${1:rotate(42deg)};');
    
    registerDesignSnippet('Desktop Media Query', 'Desktop Media Query', '@media only screen and (max-width: 5000px) {\n' +
                                                                        '    $0\n' +
                                                                        '}');
    registerDesignSnippet('Tablet Media Query', 'Tablet Media Query', '@media only screen and (max-width: 768px) {\n' +
                                                                      '    $0\n' +
                                                                      '}');
    registerDesignSnippet('Phone Media Query', 'Phone Media Query', '@media only screen and (max-width: 321px) {\n' +
                                                                    '    $0\n' +
                                                                    '}');
    
    
    // PostgreSQL snippets
    registerDesignSnippet('SELECT Query', 'SELECT', 'SELECT ${1:*} FROM ${2:test.tpeople};');
    registerDesignSnippet('INSERT Query', 'INSERT', 'INSERT INTO ${1:shop.raisle} (${2:store_id, aisle_name, order_no})\n' +
                                                    '        VALUES (${3:new.store_id, new.aisle_name, new.order_no});');
    registerDesignSnippet('UPDATE Query', 'UPDATE', 'UPDATE ${1:shop.raisle} SET ${2:aisle_name = new.aisle_name, order_no = new.order_no}\n' +
                                                    '        WHERE ${3:old.id = raisle.id};');
    registerDesignSnippet('DELETE Query', 'DELETE', 'DELETE FROM ${1:shop.raisle} WHERE ${2:id = 123456};');
    // CREATE FUNCTION
    // CREATE TABLE
    // CREATE VIEW
    // CREATE TRIGGER
    // CREATE SEQUENCE
    // CREATE SCHEMA
    // CREATE GROUP
    // CREATE USER
    // CREATE RULE
    // GRANT (EXECUTE, SELECT,UPDATE,INSERT,DELETE,TRUNCATE,REFERENCES,TRIGGER) ON (FUNCTION,TRIGGER,SEQUENCE,TABLE) TO test.tpeople
});