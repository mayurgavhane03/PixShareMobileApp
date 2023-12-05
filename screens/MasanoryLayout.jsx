import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';
import { Image, TouchableOpacity } from 'react-native';
import { urlFor } from '../sanity';
import { Text } from 'react-native';
const MasanoryLayout = ({ data, screen  }) => {
  // Check if data is defined before using it
  if (!data) {
    // If data is undefined, you can render a message or return null
    return null;
  }

  return (
    <MasonryList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <CardItem data={item} screen={screen} />}
    />
  );
};

const CardItem = ({ data, screen }) => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(screen, { param: data._id });
  };

  return (
    <>
    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16,  padding: 5, borderRadius: 8 }}>
  {data.title}
</Text>
    <TouchableOpacity
      style={{ height: Math.round(Math.random() * 100 + 200) }}
      className="bg[#111] m-1 rounded-md relative overflow-hidden"
      onPress={handleClick}
    >
      <Image
        source={{ uri: urlFor(data.image).url() }}
        className="w-full h-full object-cover"
      />
        <Text style={{ color: 'black' }}>{data.title}</Text>
    </TouchableOpacity>
    </>
  );
};

export default MasanoryLayout;
