import React, { useState } from 'react';
import { View, Text, TouchableOpacity,  ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';
import styles from './nearbyjobs.style';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router';
const NearbyJobs = () => {
  const {data,isLoading,error} = useFetch('search',{query:'React developer',num_pages:1})
  console.log(data)
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job)=>(
            <NearbyJobCard key={`nearby-job-${job?.job_id}`} job={job} handleNaviagte={()=> router.push(`/job-details/${job.job_id}`)} />

          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
