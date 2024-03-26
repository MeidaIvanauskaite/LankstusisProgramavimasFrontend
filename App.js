import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, Modal, StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
 
const Stack = createNativeStackNavigator();
 
function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Pressable style={styles.helpButton} onPress={() => navigation.navigate('Pagalba')}>
            <Text style={styles.helpButtonText}>?</Text>
          </Pressable>
        </View>
        <View style={styles.mainTitleBlock}>
          <Text style={styles.title}>Sveiki!</Text>
          <Text style={styles.mainText}>Išmaniūjų Namų Sistemos Gavimo Programa</Text>
        </View>
        <View style={styles.buttonNext}>
          <Button title='Tęsti' color='#557FD5' onPress={() => navigation.navigate('Klausimynas')}/>
        </View>
        <StatusBar style="auto"/>
      </View>
    </ImageBackground>
  );
}
 
function QuizScreen({ navigation }) {
  const [isOpen1, setOpen1] = useState(false);
  const [currentValue1, setCurrentValue1] = useState([]);
  const [isOpen2, setOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState([]);
  const [isOpen3, setOpen3] = useState(false);
  const [currentValue3, setCurrentValue3] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [lastValue, setLastValue] = useState([]);
  const [allCurrentValues, setAllCurrentValues] = useState([]);
 
  const handleValueChange = (value, setter) => {
    setter(value);
    setAllCurrentValues(value);
    setModalVisible(!modalVisible);
  };
 
  const handleDropdown1Open = () => {
    setOpen2(false);
    setOpen3(false);
  };
  const handleDropdown2Open = () => {
    setOpen1(false);
    setOpen3(false);
  };
  const handleDropdown3Open = () => {
    setOpen1(false);
    setOpen2(false);
  };
 
  const itemData = [
    [
      {label: 'Apsaugos funkcijos', value: 'a1'},
      {label: 'Apšvietimo funkcijos', value: 'a2'},
      {label: 'Būvimo Modeliavimo funkcijos', value: 'a3'},
      {label: 'Diagramų Sudarymo funkcijos', value: 'a4'},
      {label: 'Energijos funkcijos', value: 'a5'},
      {label: 'Galutinio Vartotojo Konfigūravimo funkcijos', value: 'a6'},
      {label: 'Geotvoros funkcijos', value: 'a7'},
    ],
    [
      {label: 'Kameros funkcijos', value: 'b1'},
      {label: 'Kitų Sistemų Integravimo funkcijos', value: 'b2'},
      {label: 'Laikmačio Jungiklių funkcijos', value: 'b3'},
      {label: 'Langinių funkcijos', value: 'b4'},
      {label: 'Langų ir Durų Stebėjimo funkcijos', value: 'b5'},
      {label: 'Loginės funkcijos', value: 'b6'},
      {label: 'Multimedijos funkcijos', value: 'b7'},
      {label: 'Naršyklės Integravimo funkcijos', value: 'b8'},
      {label: 'Nemokamos Vizualizacijos funkcijos', value: 'b9'},
      {label: 'Orų funkcijos', value: 'b10'},
      {label: 'Oro Kondicionavimo funkcijos', value: 'b11'},
      {label: 'Pranešimo/Pavojaus Signalo funkcijos', value: 'b12'},
    ],
    [
      {label: 'Scenos funkcijos', value: 'c1'},
      {label: 'Sekų funkcijos', value: 'c2'},
      {label: 'Stoglangių funkcijos', value: 'c3'},
      {label: 'Šildymo funkcijos', value: 'c4'},
      {label: 'Vartotojo Valdymo funkcijos', value: 'c5'},
      {label: 'Ventiliacijos funkcijos', value: 'c6'},
      {label: 'Vertės Stebėjimo funkcijos', value: 'c7'},
      {label: 'Žaliūzių funkcijos', value: 'c8'},
    ]
  ];

  useEffect(() => {
    setLastValue(allCurrentValues[allCurrentValues.length - 1]);
  }, [allCurrentValues]);
 
  const createModalContent = (lastValue) => {
    const modalData = {
      a1: { title: 'Apsaugos funkcijos', text: 'Leidžia apsaugoti vartotoją ir visus ten gyvenančius nuo visų rūšių išpuolių prieš gyvybės ir turto saugumą.'},
      a2: { title: 'Apšvietimo funkcijos', text: 'Leidžia sukurti šiltą ir svetingą efektą, arba suteikti funkcinę šviesą atliekant tokias užduotis kaip skaitymas, siuvimas, televizoriaus žiūrėjimas, valgymas ar apsauga.'},
      a3: { title: 'Būvimo Modeliavimas', text: 'Leidžia imituoti savo buvimą naudodami apšvietimo ir garso sistemą, jei turite prijungtą partnerio garso įrenginį. Taip atrodys, kad esate namuose.'},
      a4: { title: 'Diagramų Sudarymas', text: 'Leidžia naudoti diagramas užrašams sutrumpinti ir tvarkyti, padeda sekti pokalbius ir dialogus, kuriuose įprastai būtumėte sumišę ir prarastumėte atitinkamą turinį. Sumažina būtino rašymo kiekį.'},
      a5: { title: 'Energijos funkcijos', text: 'Apima televizoriaus žiūrėjimą, drabužių skalbimą, namų šildymą ir apšvietimą, maudymąsi duše, darbą iš namų nešiojamu ar kompiuteriu, prietaisų valdymą ir maisto gaminimą.'},
      a6: { title: 'Galutinio Vartotojo Konfigūravimas', text: 'Leidžia vartotojams priskirti telefonus ir katalogų numerius, kurie leidžia skambinti ir bendrauti su kitais sistemos vartotojais, taip pat skambinti į išorinius tinklus.'},
      a7: { title: 'Geotvoros funkcijos', text: 'Leidžia vartotojams aldyti integruotą namų apšvietimą, durų spynas, termostatus, elektroninius prietaisus ir prietaisus ir kt. Ji taip pat stebi ir valdo namų apsaugos sistemas, įskaitant įsilaužimo signalizaciją, kameras ir priešgaisrinius bei gyvybės saugos įrenginius.'},
      
      b1: { title: 'Kameros funkcijos', text: ''},
      b2: { title: 'Kitų Sistemų Integravimas', text: 'Suteikia galimybė sujungti kelias pastato sistemas (tokias kaip apšvietimas, šildymas, telekomunikacijos ir apsaugos kontrolė) į vieną infrastruktūrą, kuri suteikia didelę naudą ir sutaupo pastatų ir patalpų valdymo, vartotojo išlaidas.'},
      b3: { title: 'Laikmačio Jungikliai', text: 'Leidžia automatizuoti įvairius elektros prietaisus ar sistemas, leidžiant juos įjungti arba išjungti tam tikru laiku ar intervalais.'},
      b4: { title: 'Langinės funkcijos', text: 'Leidžia vartotojams reguliuoti langinių padėtį tokiais tikslais kaip šviesos valdymas, privatumas ir energijos vartojimo efektyvumas, todėl patogu pritaikyti namų aplinkai.'},
      b5: { title: 'Langų ir Durų Stebėjimas', text: 'Suteikia langų ir durų jutiklius, kurie yra nedideli įtaisai, kurie tvirtinami prie jūsų durų ar langų ir gali pranešti, jei kuris nors iš jų atsidaro.'},
      b6: { title: 'Loginės funkcijos', text: ''},
      b7: { title: 'Multimedijos funkcijos', text: 'Apima įvairias medijos elementus, tokių kaip tekstas, vaizdai, garsas, vaizdo įrašai, animacija ir interaktyvumas, derinį, kurie yra integruoti siekiant sukurti patrauklesnę ir interaktyvesnę patirtį vartotojui.'},
      b8: { title: 'Naršyklės Integravimas', text: ''},
      b9: { title: 'Nemokama Vizualizacija', text: 'Suteikia vartotojui nemokama debesyje priglobta programą, skirta duomenų vizualizavimui ir analizei. Tai komercinės informacijos suvestinės, ataskaitų teikimo ir duomenų maišymo platformos darinys.'},
      b10: { title: 'Orų funkcijos', text: 'Leidžia geriau prognozuoti orą ir analizuoti atmosferos kokybę namuose. Pateikia duomenis, susijusius su atmosfera namuose, pavyzdžiui, oro kokybe, patalpų oro taršos drėgme ir temperatūra.'},
      b11: { title: 'Oro Kondicionavimas', text: 'Suteikia šaltą orą jūsų namuose ar uždaroje erdvėje, iš tikrųjų pašalindamas šilumą ir drėgmę iš patalpų oro. Jis grąžina atvėsintą orą į vidaus erdvę, o nepageidaujamą šilumą ir drėgmę perkelia į lauką.'},
      b12: { title: 'Pranešimo/Pavojaus Signalas', text: 'Suteikia apsaugą nuo įsilaužimo sistemą, kuri susideda iš kelių elektrinių komponentų, kurie yra prijungti prie nekilnojamojo turto. Per jutiklius ir kontaktus jie aptinka judėjimą arba durų ir langų atsidarymą, o tada skleidžiamas garsus aliarmas, perspėjantis šalia esančius apie neteisėtą patekimą.'},
      
      c1: { title: 'Scenos funkcijos', text: 'Apima netvarkos pašalinimą, baldų pertvarkymą, dekoro keitimą ir dažų spalvų keitimą, kad namas atrodytų švarus, harmoningas ir patrauklus plačiajai auditorijai.'},
      c2: { title: 'Sekų funkcijos', text: 'Leidžia automatizuoti sudėtingus apšvietimo scenarijus, pagerinti estetiką ir suteikti patogumo įvairioms veikloms ar nuotaikoms namuose.'},
      c3: { title: 'Stoglangių funkcijos', text: 'Leidžia vartotojams atidaryti arba uždaryti stoglangius, reguliuoti žaliuzes ir reguliuoti natūralaus apšvietimo lygį.'},
      c4: { title: 'Šildymo funkcijos', text: 'Leidžia gaminti šiluminę energiją ir perduoti ją orui visame name, ir užtikrina komfortą šaltuoju metų laiku.'},
      c5: { title: 'Vartotojo Valdymas', text: ''},
      c6: { title: 'Ventiliacijos funkcijos', text: 'Suteikia patalpų ir lauko oro mainus, ir užtikrina sveiką kvėpuoti orą, praskiedžiant pastate esančius teršalus ir pašalinant iš jo teršalus.'},
      c7: { title: 'Vertės Stebėjimas', text: 'Leidžia apskaičiuoti savo namo vertę naudodami internetinius įrankius ir apmokytus specialistus, kad geriau pasiruošite pirkti, parduoti, refinansuoti, panaudoti savo būsto nuosavybę ar net derėtis dėl mažesnių nekilnojamojo turto mokesčių.'},
      c8: { title: 'Žaliūzių funkcijos', text: 'Leidžia naudotojams reguliuoti žaliuzių, užuolaidų padėtį, šviesos valdymo ar energijos vartojimo efektyvumo tikslais, taip užtikrinant patogumą ir pritaikymą namuose.'},
    };
    const data = modalData[lastValue] || { title: '???', text: 'Nėra pasirinkimo aprašymo...'};
    
    return (
      <View>
        <Text style={styles.modalTitle}>{data.title}</Text>
        <Text style={styles.modalText}>{data.text}</Text>
      </View>
    );
  };
 
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Pressable style={styles.helpButton} onPress={() => navigation.navigate('Pagalba')}>
            <Text style={styles.helpButtonText}>?</Text>
          </Pressable>
        </View>
        <View style={styles.quizFlex}>
          <Text style={styles.quizTitle}>Klausimynas</Text>
          <DropDownPicker
            items={itemData[0]}
            value={currentValue1}
            setValue={(val) => handleValueChange(val, setCurrentValue1)}
            open={isOpen1}
            setOpen={() => setOpen1(!isOpen1)}
            onOpen={handleDropdown1Open}
            placeholder='Funkcijos: A - I'
            dropDownDirection="BOTTOM"
            multiple={true}
            min={0}
            max={10}
            maxHeight={200}
            showTickIcon={true}
            theme='DARK'
            mode='BADGE'
            zIndex={300}
            badgeColors={'black'}
            badgeTextStyle={{color: 'white'}}
            selectedItemLabelStyle={{color: '#C1F6A2'}}
            textStyle={{fontSize: 17, textAlign: 'center', color: 'white'}}
            placeholderStyle={{fontWeight: '400', fontSize: 18}}
            style={styles.quizCategory}
          />
          <DropDownPicker
            items={itemData[1]}
            value={currentValue2}
            setValue={(val) => handleValueChange(val, setCurrentValue2)}
            open={isOpen2}
            setOpen={() => setOpen2(!isOpen2)}
            onOpen={handleDropdown2Open}
            placeholder='Funkcijos: J - R'
            dropDownDirection="BOTTOM"
            multiple={true}
            min={0}
            max={10}
            maxHeight={200}
            showTickIcon={true}
            theme='DARK'
            mode='BADGE'
            zIndex={200}
            badgeColors={'black'}
            badgeTextStyle={{color: 'white'}}
            selectedItemLabelStyle={{color: '#C1F6A2'}}
            textStyle={{fontSize: 17, textAlign: 'center', color: 'white'}}
            placeholderStyle={{fontWeight: '400', fontSize: 18}}
            style={styles.quizCategory}
          />
          <DropDownPicker
            items={itemData[2]}
            value={currentValue3}
            setValue={(val) => handleValueChange(val, setCurrentValue3)}
            open={isOpen3}
            setOpen={() => setOpen3(!isOpen3)}
            onOpen={handleDropdown3Open}
            placeholder='Funkcijos: S - Ž'
            dropDownDirection="BOTTOM"
            multiple={true}
            min={0}
            max={10}
            maxHeight={200}
            showTickIcon={true}
            theme='DARK'
            mode='BADGE'
            zIndex={100}
            badgeColors={'black'}
            badgeTextStyle={{color: 'white'}}
            selectedItemLabelStyle={{color: '#C1F6A2'}}
            textStyle={{fontSize: 17, textAlign: 'center', color: 'white'}}
            placeholderStyle={{fontWeight: '400', fontSize: 18}}
            style={styles.quizCategory}
          />
          <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {createModalContent(lastValue)}
              </ScrollView>
            </View>
          </Modal>
        </View>
        <View style={styles.buttonNext}>
          <Button title='Tęsti' color='#6699FF' onPress={() => navigation.navigate('Produktų Sąrašas', {category1: currentValue1, category2: currentValue2, category3: currentValue3})}/>
        </View>
        <StatusBar style="auto"/>
      </View>
    </ImageBackground>
  );
}
 
function ItemListScreen({route, navigation}) {
  const {category1, category2, category3} = route.params;
  const categories = [category1, category2, category3];
  const results = [];
  let index = 0;
 
  categories.forEach((category, i) => {
    category.forEach((item, j) => {
      const key = `${i}-${j}-${item}`;
      index++;
      results.push(
        <TouchableOpacity
          key={key}
          activeOpacity={0.6}
          style={styles.itemListProduct}
          onPress={() => navigation.navigate('Produktas', { itemId: item })}
        >
          <Text style={styles.productFirstLine}>{index}. Produktas</Text>
          <Text style={styles.productSecondLine}>Kategorijos ID: {item}</Text>
        </TouchableOpacity>
      );
    });
  });
 
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Pressable style={styles.helpButton} onPress={() => navigation.navigate('Pagalba')}>
            <Text style={styles.helpButtonText}>?</Text>
          </Pressable>
        </View>
        <View style={styles.itemListFlex}>
          <Text style={styles.itemListTitle}>Produktai:</Text>
          {results}
        </View>        
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
 
function ProductInfoScreen({route, navigation}) {
  const {itemId} = route.params;
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.flex1}>
          <Pressable style={styles.helpButton} onPress={() => navigation.navigate('Pagalba')}>
            <Text style={styles.helpButtonText}>?</Text>
          </Pressable>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productInfoTitle}>Produkto pavadinimas</Text>
          <Text style={styles.productInfoText}>Produkto informacija</Text>
          <Text style={styles.productInfoText}>itemId: {JSON.stringify(itemId)}</Text>
        </View>
        <StatusBar style="auto"/>
      </View>
    </ImageBackground>
  );
}
 
function HelpScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.helpTitle}>Kam reikalinga ši programa?</Text>
          <Text style={styles.helpText}>Ši programa leidžia vartotojui surasti jam tinkamą išmaniūjų namų sistemą.....</Text>
          <Text style={styles.helpTitle}>Kaip naudotis programa?</Text>
          <Text style={styles.helpText}>1. Pradinio lango apačioje matomas mygtukas 'tęsti', kurį paspaudus jūs busite nuvedamas į klausimyną. </Text>
          <Text style={styles.helpText}>2. Klausimyno lange jums reikia pasirinkti kūrią kategoriją norite pasirinkti.</Text>
          <Text style={styles.helpText}>3. Pasirinkę kategoriją ir paspaudę mygtuką tęsti, jums bus rodoma produkto išsami informacija.</Text>
          <Text style={styles.helpText}>4. Viršui kairėje paspaudūs mygtuką su atbuline rodykle, jūs būsite gražinamas į praeitą langą. </Text>
          <Text style={styles.helpTitle}>Kas dare šią programą?</Text>
          <Text style={styles.helpText}>Šia programą darė keturi Klaipėdos valstybinės kolegijos antro kurso informatikos studentai, kurie turėjo savo pareigas ir atsakomybes:</Text>
          <Text style={styles.helpText}>Tomas Budrikas - Fullstack</Text>
          <Text style={styles.helpText}>Meida Ivanauskaitė - Frontend</Text>
          <Text style={styles.helpText}>Lukas Raišuotis - Backend</Text>
          <Text style={styles.helpText}>Karolis Kleinauskas - Duomenų bazės</Text>
          <TouchableOpacity style={styles.feedbackButton} onPress={() => navigation.navigate('Atsiliepimai')}>
            <Text style={styles.feedbackButtonText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
 
function FeedbackScreen({ navigation }) {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [showModal, setShowModal] = useState(false);
 
  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Feedback Text:', feedbackText);
 
    setShowModal(true);
  };
 
  const handleContinue = () => {
    setShowModal(false);
 
    navigation.navigate('Pagrindinis');
  };
 
  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.feedbackTitle}>Atsiliepimai</Text>
 
        <Text style={styles.label}>Įvertinkite savo patirtį (1-5)</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((value) => (
            <TouchableOpacity
              key={value}
              style={[styles.ratingItem, value <= rating && styles.selectedRatingItem]}
              onPress={() => setRating(value)}>
              <Text style={styles.ratingText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>
 
        <Text style={styles.label}>Padėkite mums tobulėti</Text>
        <TextInput
          style={styles.feedbackTextInput}
          multiline
          numberOfLines={4}
          placeholder="Jūsų atsiliepimas"
          value={feedbackText}
          onChangeText={(text) => setFeedbackText(text)}
        />
 
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Siūsti</Text>
        </TouchableOpacity>
 
        {showModal && (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Ačiū už atsiliepimą!</Text>
              <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={styles.continueButtonText}>Tęsti</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
);
} 
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pagrindinis">
        <Stack.Screen name="Pagrindinis" component={HomeScreen}/>
        <Stack.Screen name="Klausimynas" component={QuizScreen}/>
        <Stack.Screen name="Produktų Sąrašas" component={ItemListScreen}/>
        <Stack.Screen name="Produktas" component={ProductInfoScreen}/>
        <Stack.Screen name="Pagalba" component={HelpScreen}/>
        <Stack.Screen name="Atsiliepimai" component={FeedbackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flex1: {
    flex: 1,
  },
  helpButton: {
    position: 'fixed',
    marginTop: 20,
    left: 160,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 5,
    backgroundColor: '#6699FF',
  },
  helpButtonText: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  mainTitleBlock: {
    top: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
  mainText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 270,
    color: 'white',
  },
  buttonNext: {
    width: 200,
    height: 70,
  },


  quizFlex: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    marginTop: 50
  },
  quizTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15
  },
  quizCategory: {
    marginBottom: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  scrollViewContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  modalText: {
    fontSize: 17,
    color: 'black',
    marginTop: 5
  },


  itemListFlex: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    marginTop: 50
  },
  itemListTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  itemListProduct: {
    width: '100%',
    marginVertical: 5,
    borderColor: '#313143',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#313143',
  },
  productFirstLine: {
    fontSize: 22,
    color: '#E0E5F7',
  },
  productSecondLine: {
    fontSize: 15,
    color: '#CFD4E5',
    marginLeft: 24
  },


  productInfo: {
    top: -480,
    width: 320,
  },
  productInfoTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  productInfoText: {
    fontSize: 16,
    color: 'white',
    top: 10
  },
  feedbackTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },


  helpTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    color: 'white'
  },
  helpText: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
    width: 330
  },
  feedbackButton: {
    backgroundColor: '#6699FF',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    alignSelf: 'center',
  },
  feedbackButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },


  label: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  ratingItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  selectedRatingItem: {
    backgroundColor: '#6699FF',
  },
  ratingText: {
    fontSize: 16,
    color: '#6699FF',
  },
  feedbackTextInput: {
    width: '80%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#6699FF',
    padding: 10,
    borderRadius: 5,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#6699FF',
    width: '80%',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
 
// npm install (node_modules)
// npm run start (qr code)
// npm run android (qr code + paleidimas per android pc)
