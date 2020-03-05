import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  margin: 8px 0;
`;

const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;

const CatalogContainer = styled.View`
  height: 201px;
`;

const CatalogImageContainer = styled.TouchableOpacity`
  padding: 0 4px;
`;

const CatalogImage = styled.Image``;

interface Props {
  title: string;
  url: string;
  onPress: (id: number) => void;
}

const SubCatalogList = ({title, url, onPress}: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res.data.movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <InfoContainer>
        <Title> {title} </Title>
      </InfoContainer>
      <CatalogContainer>
        <FlatList
          horizontal={true}
          data={data}
          keyExtractor={(item, index) => {
            return `catalogList-${(item as IMovie).id}${index}}`;
          }}
          renderItem={({item, index}) => (
            <CatalogImageContainer
              activeOpacity={1}
              onPress={() => {
                onPress((item as IMovie).id);
              }}>
              <CatalogImage
                source={{uri: (item as IMovie).large_cover_image}}
                style={{width: 136, height: 201}}
              />
            </CatalogImageContainer>
          )}
        />
      </CatalogContainer>
    </Container>
  );
};

export default SubCatalogList;
