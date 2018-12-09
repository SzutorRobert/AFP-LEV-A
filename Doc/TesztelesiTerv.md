# Tesztelési Terv

## Bevezetés
A tesztelők a tesztforgatókönyvnek megfelelően elvégzik a tesztelést és az eredményt a tesztelési jegyzőkönyvben dokumentálják. 
A teszt kimenetelét minden esetben jelenteni kell az adott csapatvezetőjének és dokumentálni Trello-ban. 
A csapatvezetők a team-mel közösen megoldást keresnek a problémákra, majd szükség esetén frissítik a tesztforgatókönyvet. 
Ha a problémát megoldották, a tesztelő újrakezdheti a tesztelést, majd dokumentálja az eredményeket. 
Ha a hiba továbbra is fennáll, és harmadik félen múlik a megoldása eszkalálni kell a problémát a projekt menedzsernek. 

### Minta teszt eset
A teszteket az alábbi minta alapján végezzük:
- **A teszt-eset leírás és célja:**
- **A tesztelt folyamat/funkció leírása:**
- **A tesztelés előfeltételei:**
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:**
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**

# Tesztforgatókönyv

## Backend

## Adatbázis

## Web Frontend

## Android Frontend

### Login funkció (LoginAcitivity.java)
	
#### Eset 1 - Login működése(LoginAcitivity.java)
- **A teszt-eset leírás és célja:** Login megfelelő működése
- **A tesztelt folyamat/funkció leírása:** Login utáni oldal váltás.
- **A tesztelés előfeltételei:** Nincs
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített test userek.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Sikeres login után főoldal betöltése.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	
	
#### Eset 2 - Regisztráció működése
- **A teszt-eset leírás és célja:** Regisztráció megfelelő működése
- **A tesztelt folyamat/funkció leírása:** Regisztráció utáni oldal váltás.
- **A tesztelés előfeltételei:** Nincs.
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Nincs
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Sikeres regisztráció esetén a főoldal betöltése
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	
	
#### Eset 3 - Hibajelzések megfelelő működése
- **A teszt-eset leírás és célja:** Login és Regisztráláskor elkövetett "hibák"
- **A tesztelt folyamat/funkció leírása:** Hiba jelzések arra a pontra mutatnak-e ahol a felhasználó a hibát vétette.
- **A tesztelés előfeltételei:** Nincs
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített test userek.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Hibák előugrása hibás adat bevitelekor
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	

#### Eset 4 - Formátum
- **A teszt-eset leírás és célja:** Fromátumok tesztelése.
- **A tesztelt folyamat/funkció leírása:**	Login oldalrol a főoldalra navigálás
- **A tesztelés előfeltételei:** Nincs
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített test userek.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Gombok pirossal jelennek meg illetve háttér betöltése.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	
	
### Főoldal (MainAcitivity.java)

#### Eset 1 - Gombok betöltése
- **A teszt-eset leírás és célja:** Gomb adatok letöltése
- **A tesztelt folyamat/funkció leírása:** A gombok a login oldalváltása után megjelennek.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető topic-ok. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Megfelelő mennyiségű gomb jelenik meg.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	
	
#### Eset 2 - Gombok működése
- **A teszt-eset leírás és célja:** Gombok megfelelő helyre irányítása
- **A tesztelt folyamat/funkció leírása:** Gomb lenyomása után oldalváltás.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető topic-ok/gombok. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** A gombok a nevükkel megegyező topicra irányítanak.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	

#### Eset 3 - Menüsor működése
- **A teszt-eset leírás és célja:** Menüsor előhozatala
- **A tesztelt folyamat/funkció leírása:** Képernyő bal oldaláról ujjal való huzás.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető topic-ok/gombok. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Megjelenik a menüsor
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	


#### Eset 4 - Menüsor elemek
- **A teszt-eset leírás és célja:** Menüsor elemeinek működése
- **A tesztelt folyamat/funkció leírása:** Menü elemek megnyomása esetén oldal navigálás/művelet végzés.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető topic-ok/gombok. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** A kiválasztott menü elem lenyomásakor a hozzá tartzó szöveggel megeggyező feladatot hajt végre.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	
	
#### Eset 5 - Formátum
- **A teszt-eset leírás és célja:** Fromátumok tesztelése.
- **A tesztelt folyamat/funkció leírása:**	A tananyagok oldalról egy tananyagra navigálunk.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető topic-ok/gombok. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** A gomb a topic-val megegyező képpel jelenik meg.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	

### Tananyagok listája (tananyagok.java)

### Tananyag (Tananyag.java)

#### Eset 1 - Cím
- **A teszt-eset leírás és célja:** Cím betöltés és megjelenítés tesztelése.
- **A tesztelt folyamat/funkció leírása:** A tananyagok oldalról egy tananyagra navigálunk.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető tananyagok és ahhoz kapcsolódó tananyag. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Az oldal első sorában megjelenik az adott tananyag címe.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	

#### Eset 2 - Tartalom
- **A teszt-eset leírás és célja:** Tartalom betöltés és megjelenítés tesztelése.
- **A tesztelt folyamat/funkció leírása:**	A tananyagok oldalról egy tananyagra navigálunk.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető tananyagok és ahhoz kapcsolódó tananyag. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Az oldal második sorától kezdve megjelenik az adott tananyag tartalma.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	

#### Eset 3 - Formátum
- **A teszt-eset leírás és célja:** Fromátumok tesztelése.
- **A tesztelt folyamat/funkció leírása:**	A tananyagok oldalról egy tananyagra navigálunk.
- **A tesztelés előfeltételei:** Belépett felhasználó, szerver kapcsolat, elérhető tananyagok és ahhoz kapcsolódó tananyag. 
- **A tesztelés dátuma és időpontja:**
- **A tesztadatok típusa:**	Szerver oldalon rögzített teszt adatok.
- **A tesztet végző személy(ek):**
- **A tesztelt rendszer beállításai:**
- **A teszt-eset elvárt eredménye:** Az oldal első sora (cím) nagyobb betűvel telenik meg mint a tartalom.
- **A tesztelés eredménye:** Megfelelt / Nem felelt meg / Megfelelt megjegyzésekkel
- **Megjegyzések:**	