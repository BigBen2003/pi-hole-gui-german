# pi-hole-gui-german
Nach Möglichkeit werden alle englischen Begriffe ins Deutsche übersetzt.

Für alle, die in Pi-Hole eine GUI in Deutscher Sprache suchen, wurde ein Bash-Script entwickelt, welches in Original-Pi-Hole-Dateien die englischen Begriffe gegen Deutsche austauscht.

Voraussetzungen
===============
Standardmäßig wird pi-Hole auf einem Linux-System (getestet auf Debian Stretch) im Pfad /var/www/html gesichert.

Die bash-Script-Dateien Replace-German und install-update müssen in den Pfad /var/www kopiert werden.

Verwendung
----------

install-update
==============
Dieses Script stellt den original-Zustand von pi-Hole wieder her und führt anschließend den Befehl "pihole -up" aus.

Zum Abschluss werden die neuen Dateien wieder dahingehend angepasst, dass die englische Begriffe wieder ins deutsche übersetzt werden.

replace-german
==============
In dieser Bash-Script-Datei sind alle Suche- und Ersetzungsbegriffe enthalten.

