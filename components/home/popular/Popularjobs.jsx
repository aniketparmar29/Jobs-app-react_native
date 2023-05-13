import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';
import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {
  const navigation = useNavigation();
  const {data,isLoading,error} = useFetch('search',{query:'React developer',num_pages:1})
  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllJobs')}>
          <Text style={styles.header}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={[1,2,3,4,5,6,7,8]}
          renderItem={({item,index})=>(
            <PopularJobCard key={index} item={item}/>
          )}
          keyExtractor={item =>item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
