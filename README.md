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
- **React Native Komponentit:** `View`, `Text`, `TextInput`, `StyleSheet`

---

#### Olemassa olevan projektin käynnistys:
```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npx expo start
```

### Sovelluksen testaaminen:

#### 📱 Mobiililaite:
1. Asenna **Expo Go** -sovellus (iOS App Store / Google Play)
2. Skannaa QR-koodi Expo Go -sovelluksella

#### 💻 Emulaattori/Simulaattori:
```bash
npm run android   # Android-emulaattori
npm run ios       # iOS-simulaattori  
npm run web       # Verkkoselain
```  
   ```

---

### 📁 Projektikansio

```
Web_Hybrid_Mobiiliohjelmointi_T1/
├── README.md
└── Tehtava1/
    └── Tavoitesyke/
        ├── App.tsx              # Sovelluksen pääkomponentti
        ├── app.json             # Expo-konfiguraatio  
        ├── index.ts             # Sovelluksen käynnistyspiste
        ├── package.json         # Projektin riippuvuudet
        ├── package-lock.json    # Lukitut riippuvuusversiot
        ├── tsconfig.json        # TypeScript-asetukset
        ├── .gitignore           # Git-ohitettavat tiedostot
        └── assets/              # Kuvat ja resurssit
            ├── adaptive-icon.png
            ├── favicon.png
            ├── icon.png
            └── splash-icon.png
```

**Tärkeimmät tiedostot:**
- 📱 **App.tsx** - Tavoitesyke-sovelluksen lähdekoodi
- ⚙️ **package.json** - Projektin riippuvuudet ja skriptit  
- 🖼️ **assets/** - Sovelluksen ikonit ja grafiikat

**Ei näy GitHubissa** (`.gitignore`):
- `node_modules/` - Ladattavat riippuvuudet
- `.expo/` - Kehitystyökalujen väliaikaiset tiedostot

---

### 🎯 Oppimistavoitteet
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

## 📚 Oppimisresurssit

### React Native dokumentaatio:
- [React Native Documentation](https://reactnative.dev/docs/getting-started) - Virallinen dokumentaatio
- [React Native TextInput](https://reactnative.dev/docs/textinput) - Tekstisyötteen käsittely
- [React Native StyleSheet](https://reactnative.dev/docs/stylesheet) - Tyylien määrittely
- [React Native View](https://reactnative.dev/docs/view) - Pohjakomponentti layoutille
- [React Native Text](https://reactnative.dev/docs/text) - Tekstin näyttäminen

### React Hooks:
- [React useState Hook](https://react.dev/reference/react/useState) - Tilanhallinnan perusteet
- [React Hooks Documentation](https://react.dev/reference/react) - Kaikki React Hooks

### Expo dokumentaatio:
- [Expo Documentation](https://docs.expo.dev/) - Expo-alustan dokumentaatio
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) - Komentorivityökalut
- [Expo Go App](https://expo.dev/go) - Sovelluksen testaus mobiililaitteella

### TypeScript:
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript-dokumentaatio
- [TypeScript with React Native](https://reactnative.dev/docs/typescript) - TypeScript React Native -sovelluksissa

### Matematiikka ja laskentakaavat:
- [Target Heart Rate Calculator](https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates) - American Heart Association
- [Exercise Heart Rate Guidelines](https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise-intensity/art-20046887) - Mayo Clinic

### Työkalut ja ympäristöt:
- [VS Code React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) - Kehitystyökalut
- [Android Studio](https://developer.android.com/studio) - Android-emulaattori
- [Xcode](https://developer.apple.com/xcode/) - iOS-simulaattori

---

