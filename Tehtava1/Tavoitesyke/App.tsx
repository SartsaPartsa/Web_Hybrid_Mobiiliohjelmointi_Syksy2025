/*
 * TAVOITESYKE-SOVELLUS
 * ====================
 * Laskee optimaalisen sykevaihteluvälin iän perusteella
 * Kaava: Maksimisyke = 220 - ikä, alaraja 65%, yläraja 85%
 */
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// Sovelluksen pääkomponentti
export default function App() {
  // TILAN HALLINTA
  // ==============
  // Käyttäjän syöttämä ikä (tyhjä merkkijono alkuarvona)
  const [age, setAge] = useState('');

  // LASKUTOIMITUKSET
  // ================
  // Muutetaan teksti numeroksi (NaN jos ei ole validi numero)
  const num = Number(age);

  // SYKKEEN LASKEMINEN
  // ==================
  // Lasketaan sykerajat jos syöte on validi numero ja ei tyhjä
  // Alaraja = (220 - ikä) × 0.65, yläraja = (220 - ikä) × 0.85
  const lower = !isNaN(num) && age.trim() !== '' ? Math.round((220 - num) * 0.65) : 0;
  const upper = !isNaN(num) && age.trim() !== '' ? Math.round((220 - num) * 0.85) : 0;

  // KÄYTTÖLIITTYMÄN RAKENTAMINEN
  // ============================
  return (
    <View style={styles.container}>
      {/* OTSIKKO */}
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>

      {/* IKÄSYÖTE */}
      <Text style={styles.label}>Enter your age:</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter age"           // Ohjeteksti kentässä
        keyboardType="numeric"            // Numeronäppäimistö
        value={age}                       // Sidottu age-tilaan
        onChangeText={setAge}             // Päivittää tilan
      />

      {/* TULOKSET */}
      <Text style={styles.text}>Lower limit: {lower} bpm</Text>
      <Text style={styles.text}>Upper limit: {upper} bpm</Text>
    </View>
  );
}

// TYYLIMÄÄRITTELYT
// ================
const styles = StyleSheet.create({
  // PÄÄKONTAINERI
  container: {
    flex: 1,                          // Vie koko näytön
    backgroundColor: '#fff',          // Valkoinen tausta
    alignItems: 'center',             // Keskitä vaakasuunnassa
    justifyContent: 'flex-start',     // Ylhäältä alkaen
    paddingTop: 60,                   // Tila status barille
    paddingHorizontal: 20,            // Sivumarginaalit
  },
  
  // OTSIKON TYYLI
  title: {
    fontSize: 22,                     // Koko pisteinä
    fontWeight: 'bold',               // Lihavointi
    marginBottom: 20,                 // Väli alapuolelle
  },
  
  // OHJETEKSTIN TYYLI
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  
  // SYÖTTÖKENTÄN TYYLI
  input: {
    borderWidth: 1,                   // Reunaviivan paksuus
    borderColor: '#888',              // Harmaa väri
    borderRadius: 5,                  // Pyöristetyt kulmat
    padding: 8,                       // Sisäinen tila
    width: 150,                       // Leveys
    marginBottom: 30,                 // Väli alapuolelle
    textAlign: 'center',              // Keskitetty teksti
  },
  
  // TULOSTETEKSTIN TYYLI
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});







