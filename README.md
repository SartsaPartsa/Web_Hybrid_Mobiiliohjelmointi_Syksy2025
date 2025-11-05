# Web_Hybrid_Mobiiliohjelmointi_Tavoitesyke

## 📱 React Native — Heart Rate Limits

**Tekijä:** Sara Vehviläinen  
**Oppilaitos:** Oulun ammattikorkeakoulu  
**Kurssi:** Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)  
**Lukukausi:** Syksy 2025  

---

### 🧩 Tehtävän kuvaus
Tämä sovellus laskee liikunnan **tavoitesykkeen ala- ja ylärajat** käyttäjän iän perusteella.  
Tehtävä on osa kurssia *Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)*.

---

### 🧮 Laskentakaavat
- **Ala-arvo:** `(220 - ikä) × 0.65`  
- **Yläarvo:** `(220 - ikä) × 0.85`  

Jos käyttäjä syöttää **ei-numeerisen arvon** (esim. pisteitä, pilkkuja tai kirjaimia), sovellus näyttää **0** sekä ala- että ylärajaksi.

---

### ✨ Toiminnallisuus
- Käyttäjä syöttää **iän** tekstikenttään.  
- Sovellus laskee ja näyttää tavoitesykkeen **ala- ja ylärajan** reaaliaikaisesti.  
- Jos syöte ei ole kelvollinen, molemmat arvot ovat **0**.  
- Tekstikenttä hyväksyy vain numerot (`keyboardType="number-pad"`).  

---

### 🛠️ Käytetyt teknologiat ja komponentit
- **React Native (Expo)**
- **React Hook:** `useState`
- **Komponentit:** `View`, `Text`, `TextInput`, `StyleSheet`

---

### 🚀 Käyttöönotto
1. Asenna riippuvuudet  
   ```bash
   npm install
   ```

2. Käynnistä sovellus  
   ```bash
   npm start
   ```

3. Skannaa QR-koodi **Expo Go** -sovelluksella tai käynnistä emulaattorissa  
   ```bash
   npm run android   # Android-emulaattori
   npm run ios       # iOS-simulaattori
   npm run web       # Verkkoselain
   ```

---

### 📁 Projektikansio
```
Tehtava1/
  Tavoitesyke/
    ├── App.tsx         # Sovelluksen pääkomponentti
    ├── package.json    # Projektin riippuvuudet ja npm-skriptit
    ├── app.json        # Expo-sovelluksen konfiguraatiotiedosto
    ├── tsconfig.json   # TypeScript-kääntäjän asetukset
    ├── index.ts        # Sovelluksen käynnistyspiste
    └── assets/         # Kuvat, fontit ja muut staattiset resurssit
```

---

### 🎯 Oppimstavoitteet
- React Native -perusteet
- React Hooks (`useState`)
- Käyttäjäsyötteen käsittely ja validointi
- Reaaliaikainen laskenta
- TypeScript React Native -sovelluksessa

---

### 📝 Huomioita
- Sovellus käyttää `keyboardType="number-pad"` syötteen rajaamiseksi numeroihin
- Virheellinen syöte (esim. tyhjä, kirjaimet) näyttää 0-arvot
- Laskenta tapahtuu reaaliaikaisesti `useState`-hookin avulla
- Tulokset pyöristetään lähimpään kokonaislukuun (`Math.round()`)

---

