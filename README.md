# Web_Hybrid_Mobiiliohjelmointi_Tavoitesyke

## 📱 React Native — Heart Rate Limits
**Oulun ammattikorkeakoulu — Syksy 2025**  
**Opiskelija:** Sara Vehviläinen  

---

### 🧩 Tehtävän kuvaus
Tämä sovellus laskee liikunnan **tavoitesykkeen ala- ja ylärajat** käyttäjän iän perusteella.  
Tehtävä on osa kurssia *Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)*.

---

### 🧮 Laskentakaavat
- **Ala-arvo:** `(220 - ikä) × 0.65`  
- **Yläarvo:** `(220 - ikä) × 0.85`  

Jos käyttäjä syöttää **ei-numeerisen arvon** (esimerkiksi vain pisteitä tai pilkkuja), sovellus näyttää **0** sekä ala- että ylärajaksi.

---

### ✨ Toiminnallisuus
- Käyttäjä syöttää iän tekstikenttään.  
- Sovellus laskee ja näyttää tavoitesykkeen ala- ja ylärajan.  
- Jos syöte ei ole kelvollinen, tuloksiksi näytetään **0 ja 0**.  

---

### 🛠️ Käytetyt teknologiat
- **React Native (Expo)**
- **React Hooks (useState)**
- Komponentit: `TextInput`, `Button` tai `Pressable`, `Text`, `View`

---

