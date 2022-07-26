import React, {useCallback} from 'react';
import {View, Text, Pressable, ScrollView, StyleSheet} from 'react-native';
// import styles from './style';

const NavigationScreen = ({navigation}) => {
  const navigateToUrbanEarsListScreen = useCallback(() => {
    navigation.navigate('UrbanEarsListScreen');
  }, [navigation]);

  const navigateToTravelCardList = useCallback(() => {
    navigation.navigate('TravelCardList');
  }, [navigation]);

  // const navigateToEventCard = useCallback(() => {
  //   navigation.navigate('EventCards');
  // }, [navigation]);

  // const navigateToCarouselMovie = useCallback(() => {
  //   navigation.navigate('CarouselMovie');
  // }, [navigation]);

  // const navigateToListSampleShareElement = useCallback(() => {
  //   navigation.navigate('ListSampleShareElement');
  // }, [navigation]);

  // const navigateToSalonShareElement = useCallback(() => {
  //   navigation.navigate('SalonShareElement');
  // }, [navigation]);

  // const navigateToFoodShareElement = useCallback(() => {
  //   navigation.navigate('FoodShareElement');
  // }, [navigation]);

  // const navigateToPhotographyShareElement = useCallback(() => {
  //   navigation.navigate('PhotographyList');
  // }, [navigation]);

  // const navigateToCarsList = useCallback(() => {
  //   navigation.navigate('CarsList');
  // }, [navigation]);

  // const navigateToTravelUpList = useCallback(() => {
  //   navigation.navigate('TravelUpList');
  // }, [navigation]);

  // const navigateToCanItBeDone = useCallback(() => {
  //   navigation.navigate('CanItBeDone');
  // }, [navigation]);

  // const navigateToApplication = useCallback(() => {
  //   navigation.navigate('Application');
  // }, [navigation]);

  // const navigateToChartList = useCallback(() => {
  //   navigation.navigate('ChartList');
  // }, [navigation]);

  // const navigateToLibrarySample = useCallback(() => {
  //   navigation.navigate('LibrarySample');
  // }, [navigation]);

  // const navigateToCustomUIList = useCallback(() => {
  //   navigation.navigate('CustomUIList');
  // }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Animated Page</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToUrbanEarsListScreen}>
          <Text style={styles.title}>Urban Ears Carousel</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToTravelCardList}>
          <Text style={styles.title}>Travel Card List Share ELement</Text>
        </Pressable>

        {/*
        <Pressable style={styles.btnNavigation} onPress={navigateToEventCard}>
          <Text style={styles.title}>Event Cards Share Element</Text>
        </Pressable>

         <Pressable
          style={styles.btnNavigation}
          onPress={navigateToTravelUpList}>
          <Text style={styles.title}>Travel Up List Share Element</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCarouselMovie}>
          <Text style={styles.title}>Card Carousel Movie</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToListSampleShareElement}>
          <Text style={styles.title}>List Sample Share Element</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSalonShareElement}>
          <Text style={styles.title}>Salon Menu Share Element</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFoodShareElement}>
          <Text style={styles.title}>Food Menu ShareElement</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToPhotographyShareElement}>
          <Text style={styles.title}>Photography Share Element</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToCarsList}>
          <Text style={styles.title}>Cars List Share Element</Text>
        </Pressable>


        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCustomUIList}>
          <Text style={styles.title}>Custom UI List</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToLibrarySample}>
          <Text style={styles.title}>Library Sample</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToChartList}>
          <Text style={styles.title}>Chart List</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToCanItBeDone}>
          <Text style={styles.title}>Can It Be Done</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToApplication}>
          <Text style={styles.title}>Application List</Text>
        </Pressable> */}
      </View>
    </ScrollView>
  );
};

// import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    paddingVertical: 50,
    // padding: 20,
    paddingHorizontal: 20,
  },
  btnNavigation: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#adf',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
    height: 60,
    borderRadius: 8,
    marginTop: 15,
    // padding: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
});

export default NavigationScreen;
