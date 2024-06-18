import React from 'react';
import {Button, Image, Label} from '../../components';
import {Container, Session} from './styles';

import {Dimensions} from 'react-native';
import Thunder from '../../assets/images/cloud-and-thunder.png';
import theme from '../../theme';

export function Welcome() {
  const parentWidth = Dimensions.get('window').width;
  const parentHeight = Dimensions.get('window').height;
  const imageWidth = parentWidth * 0.61;
  const imageHeight = parentHeight * 0.26;

  return (
    <Container>
      <Image
        src={Thunder}
        height={imageHeight}
        width={imageWidth}
        marginTop={800}
      />
      <Session
        style={{
          flexDirection: 'column',
        }}>
        <Label
          text="Descubra o Clima"
          color={theme?.colors?.white}
          fontFamily={theme?.fonts?.SemiBold}
          fontSize="33px"
        />
        <Label
          text="na sua Cidade"
          color={theme?.colors?.white}
          fontFamily={theme?.fonts?.SemiBold}
          fontSize="33px"
        />
      </Session>

      <Session
        style={{
          flexDirection: 'column',
        }}>
        <Session>
          <Label
            text="Com o"
            color={theme?.colors?.gray_100}
            fontFamily={theme?.fonts?.Regular}
            fontSize="22px"
          />
          <Label
            text=" Find"
            color={theme?.colors?.gray_100}
            fontFamily={theme?.fonts?.SemiBold}
            fontSize="22px"
          />
          <Label
            text="Weather "
            color={theme?.colors?.gray_100}
            fontFamily={theme?.fonts?.Bold}
            fontSize="22px"
          />
          <Label
            text="nunca"
            color={theme?.colors?.gray_100}
            fontFamily={theme?.fonts?.Regular}
            fontSize="22px"
          />
        </Session>

        <Session
          style={{
            flexDirection: 'column',
          }}>
          <Label
            text="ficou tão fácil ter a previsão do"
            color={theme?.colors?.gray_100}
            fontFamily={theme?.fonts?.Regular}
            fontSize="22px"
          />
          <Label
            text="tempo na palma da sua mão"
            color={theme?.colors?.gray_100}
            fontFamily={theme?.fonts?.Regular}
            fontSize="22px"
          />
        </Session>
      </Session>

      <Button
        background={theme?.colors?.dark_300}
        borderColor={theme?.colors?.gray_300}
      >
        <Label text="Hello World" color={theme?.colors?.white}/>
      </Button>
    </Container>
  );
}
