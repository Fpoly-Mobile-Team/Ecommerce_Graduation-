import {Block, Header,Text} from '@components';
import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {theme} from '@theme';
import ItemPromoScreen from '@components/Common/ItemList/ItemPromoScreen';
import { FlatList } from 'react-native-gesture-handler';
import {data} from './components/data'
import OptionsMenu from "react-native-option-menu";
import {SelectCircle,SelectsCircle} from '../../../../assets/svg/common';
import { ToastAndroid } from 'react-native';
const select_icon = require("../../../../assets/icons/Shape.png");

const PromoScreen = () => {
    const navigation = useNavigation();
    const editPost = () => {
      ToastAndroid.show('Edit Post', ToastAndroid.SHORT);
    };
    const deletePost = () => {
      ToastAndroid.show('Delete Post', ToastAndroid.SHORT);
    };
    const Select = (<SelectsCircle/>)

    const renderItem = ({item}) =>(
        <ItemPromoScreen
            name={item.name}
            title={item.title}
            date={item.date}
            image={item.Image}
        />

    );

  return (
    <Block flex backgroundColor="background" >
      <Header checkBackground  canGoBack title="Mã khuyến mãi" />
     <Block paddingHorizontal={12} paddingVertical={12} row backgroundColor={theme.colors.white} > 
       <SelectCircle/>
       <Block paddingLeft={8} justifyCenter>
         <Text size={16} color={theme.colors.placeholder} >Sắp xếp:</Text>
       </Block>
       <Block paddingHorizontal={3} justifyCenter>
         <Text size={16} color={theme.colors.black}>Tất cả</Text>
        
       </Block>
       <Block paddingHorizontal={1} justifyCenter alignCenter>
       
       <OptionsMenu
              button={select_icon}
              buttonStyle={{
                width: 10,
                height: 12,
                resizeMode: "contain",
                
              }}
              destructiveIndex={1}
              options={['Hạn sử dụng','Tất cả']}
              actions={[editPost, deletePost]}
            />
            {/* <SelectsCircle/> */}
       </Block>
     </Block>
   
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item=> item.id.toString()}
          showsVerticalScrollIndicator={false}
      />
   
    </Block>
  );
};

export default PromoScreen;
