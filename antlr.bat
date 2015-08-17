cd grammar
java -jar ..\tools\antlr\antlr-4.5.1-complete.jar -Dlanguage=JavaScript -o %cd%\..\tasks EcmaScriptLexer.g4
cd ..
