import React from 'react';
import '../assets/CSS/BestTiming.css';
import kedarnath from '../image/monsoon/Kedarnath.jpg';
import Badrinath from '../image/monsoon/Badrinath.jfif';
import Gangotri from '../image/monsoon/Gangotri.jpg';
import Yamunotri from '../image/monsoon/Yamunotri.jpg';

export default function MonsoonTime() {
    return (
        <>
            <p className='mini-para'>Around the end of June to the end of September, the monsoon season begins in Char Dham. It is generally not advised to travel during the monsoon season because of the heavy rain and the possibility of landslides and flooding produced by overflowing rivers.</p>

            <h2 className='heading'>KEDARNATH</h2>
            <img src={kedarnath} alt="" className='image-kedar' />
            <p className='mini-para'>The best season to visit Kedarnath is summer when the temperature is moderate and stays between 15-30 degrees Celsius. The sun is warm and there is a gentle cool breeze that makes the day pleasant</p>

            <h2 className='heading'>BADRINATH</h2>
            <img src={Badrinath} alt="" className='image-kedar' />
            <p className='mini-para'>Summers are pleasant with moderately cool climate in Badrinath and generally last between the months of May to June. The temperature ranges between a comfortable 7°C - 18°C in these months</p>

            <h2 className='heading'>GANGOTRI</h2>
            <img src={Gangotri} alt="" className='image-kedar' />
            <p className='mini-para'>Gangotri remains open each year for six months, from May to November (Akshya Tritiya to Diwali). The best time to visit Gangotri is May-June and September-October as the weather during this time remains pleasant. Gangotri remains cold throughout the year. It is best to avoid visiting Gangotri during the monsoon from July to August as the area remains prone to landslides.</p>

            <h2 className='heading'>YAMUNOTRI</h2>
            <img src={Yamunotri} alt="" className='image-kedar' />
            <p className='mini-para'>In the monsoon season, Yamunotri witnesses heavy rainfall which makes travelling troublesome. The monsoons here set in from Mid-July and last till the end of September. During this season, the visitors might face few difficulties like landslides while visiting this place.</p>

        </>
    )
}
