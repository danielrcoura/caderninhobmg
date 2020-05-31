import Intl from 'react-native-intl';

const formatValue = async (value) => {
  return await Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
}

export default formatValue;
