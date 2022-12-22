// const Router = require('express');
// const router = Router();
const axios = require('axios');

const getApiInfo = async () => {
  const result = await axios({
    method: 'get',
    url: 'https://breakingbadapi.com/api/characters',
  });
  const { data } = await result;
  const mapped = data.map((el) => {
    return {
      id: el.char_id,
      name: el.name,
      birthday: el.birthday,
      occupation: [...el.occupation],
      img: el.img,
      status: el.status,
      nickname: el.nickname,
    };
  });
  console.log(mapped.slice(0, 6));
};
getApiInfo();
