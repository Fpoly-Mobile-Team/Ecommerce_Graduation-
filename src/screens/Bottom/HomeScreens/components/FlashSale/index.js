import {icons} from '@assets';
import {Block, Text} from '@components';
import ItemProduct from '@components/Common/ItemProduct';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  Pressable,
} from 'react-native';
import styles from './styles';

const data = [
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/17/6d/36/179b87629f8780608d63943662103ce4.jpg',
    title: 'Smart Tivi Casper HD 32 inch 32HX6200',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/e4/93/74/d869ef799a8b1f7625146e97f53fcf04.png',
    title:
      'Áo thun nam thể thao trơn, cổ tròn đẹp, trẻ trung, mặc thoáng mát, thấm hút tốt, đủ size 25kg-92kg (Trắng)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/86/78/40/0df5a90d7bd5d327de2d25d510dd9b65.jpg',
    title: 'Điện Thoại Samsung Galaxy M31 (6GB/128GB) - Hàng Chính Hãng',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/82/d5/05/18c7abbd948c6e5dae557244a8e3ac44.jpg',
    title: 'KHẨU TRANG Y TẾ WAKAMONO - (4 Lớp, Hộp 10 Cái)',
  },
  {
    image:
      'https://salt.tikicdn.com/cache/280x280/ts/product/d3/f6/d5/9fd75deca506264412da501a2a429c65.jpg',
    title:
      'Áo thun tay lỡ nữ freesize - Áo phông form rộng dáng Unisex, mặc lớp, nhóm, cặp, couple thêu hình rau củ 6 màu',
  },
];

const FlashSale = () => {
  const _renderItem = ({item}) => (
    <ItemProduct
      image={item.image}
      nameProduct={item.title}
      fashsale
      left={-0.75}
    />
  );

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  return (
    <ImageBackground
      source={icons.bg_flash}
      style={styles.imgbackground}
      imageStyle={styles.imageStyle}
      resizeMode="cover">
      <Block row alignCenter padding={10} space="between">
        <Block row alignCenter>
          <Image
            source={icons.giasoc}
            style={styles.styleflash}
            resizeMode="contain"
          />
          <Image
            source={icons.flash}
            style={{
              ...styles.styleflash,
              width: getSize.s(20),
              height: getSize.s(20),
            }}
            resizeMode="contain"
          />
          <Image
            source={icons.homnay}
            style={{...styles.styleflash, width: getSize.s(113)}}
            resizeMode="contain"
          />
        </Block>
        <Pressable style={styles.stylebtn}>
          <Text size={12} color={theme.colors.white}>
            Xem tất cả
          </Text>
          <Image
            source={icons.next}
            style={styles.iconnext}
            resizeMode="contain"
          />
        </Pressable>
      </Block>
      <Block paddingHorizontal={6}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          initialNumToRender={6}
          disableVirtualization={false}
          windowSize={5}
          removeClippedSubviews={Platform.OS === 'ios' ? true : false}
          renderItem={_renderItem}
          keyExtractor={keyExtractor}
        />
      </Block>
    </ImageBackground>
  );
};

export default FlashSale;
