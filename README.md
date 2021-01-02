# pi-hole-gui-german
Nach Möglichkeit werden alle englischen Begriffe ins Deutsche übersetzt.

Für alle, die in Pi-Hole eine GUI in Deutscher Sprache suchen, wurde ein Bash-Script entwickelt, welches in Original-Pi-Hole-Dateien die englischen Begriffe gegen Deutsche austauscht.

Hinweis zu PiHole Version 5
===========================
Für die Version 5 wird diese Quelle empfohlen: https://github.com/pimanDE/translate2german

Dieses Script wird nicht mehr weiter aktualisiert.

PiHole VERSION 4
================
Bei Einsatz dieser Version muss der Branch "Version4" verwendet werden.

Voraussetzungen
===============

Vor dem Einsatz dieses Scripts muss das Programm pi-hole von dieser URL https://github.com/pi-hole/pi-hole installiert werden.

Standardmäßig wird pi-Hole auf einem Linux-System (getestet auf Debian Stretch) im Pfad /var/www/html gesichert.

Die Bash-Script-Dateien Replace-German und install-update müssen in den Pfad /var/www kopiert werden.

Verwendung
----------

install-update
==============
Dieses Script stellt den original-Zustand von pi-Hole wieder her und führt anschließend den Befehl "pihole -up" aus.

Zum Abschluss werden die neuen Dateien wieder dahingehend angepasst, dass die englische Begriffe wieder ins deutsche übersetzt werden.

replace-german
==============
In dieser Bash-Script-Datei sind alle Suche- und Ersetzungsbegriffe enthalten.

Technische Erläuterungen
========================

Der Original-Pfad inkl. aller Unter-Pfade wird vor dem Verändern als Kopie vorgehalten.

Hintergrund: Beim Aktualisieren des Programs "PiHole" wird erst geprüft, ob irgend einer Änderung vorgenommen wurde. Erst nachdem festgestellt wurde, dass alle DAteien im Original-Zustand vorhanden sind, erfolgt ein Update.

html/admin
Arbeitspfad für Pi-Hole mit allen Scripts und php-Dateien. Diese Dateien enthalten übersetzte Begriffe.

html/admin_orig
Ursprüngliches Original mit allen unveränderten Inhalten

Das Script "replace_german" kann wahlweise mit oder ohne Parameter aufgerufen werden:

replace_german [Datei]
Es werden ausschließlich die Dateien ersetzt, deren Name mit dem angegebenen identisch ist

replace_german
Ersetzt alle Dateien
Vor dem Ersetzungsvorgang wird der Pfad html/admin gelöscht und eine Kopie von html/dmin_orign erstellt.

