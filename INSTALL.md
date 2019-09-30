Pi Hole Schritt-für-Schritt-Anleitung
=====================================
Voraussetzung
-------------
- Debian Stretch System ist vorhanden und auf dem aktuellem Stand
	$ apt update && apt dist-upgrade -y
	
Durchzuführende Aktionen
------------------------
1. curl installieren
	$ apt install curl

2. PiHole installieren
	curl -sSL https://install.pi-hole.net | bash
	Mit den Standard-Einstellungen wird PiHole in den Pfad /var/www installiert.
	
3. Pfad /var/www/repo anlegen
	$ mkdir /var/www/repo
	
4. Mit Git ein Clone vom pi-hole-gui-german erstellen
	$ cd /var/www/repo
	$ git clone https://github.com/BigBen2003/pi-hole-gui-german.git
	
5. Verweise anlegen
	$ cd /var/www
	$ ln -s repo/pi-hole-gui-german/install-update
	$ ln -s repo/pi-hole-gui-german/replace-german
	
6. Vom admin eine Kopie erstellen
	$ cp -ra /var/www/html/admin /var/www/html/admin_orig
	Dieser Schritt ist ganz wichtig!!

7. Ersetzungs-Befehl ausführen
	$ cd /var/www
	$ ./replace-german
	
Nach diesem Schritt kann die aktuelle Admin-Web-Gui in Deutscher Oberfläche im Browser aufgerufen werden.

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

Update von Pi-Hole
------------------
Das Script install-update muss ausgeführt werden, um ein Update durchführen zu können.
	$ cd /var/www
	$ ./install-update

