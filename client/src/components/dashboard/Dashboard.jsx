import React, { useEffect, useState } from 'react'
import './dashboard.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addWatch } from '../../reducers/Watch';
import Hsuggestion from '../suggestions/Hsuggestion';
import { AddWatch } from '../../functions/Watch';
import messi from '../../assets/video/Leo Messi Legendary Momentsd.mp4'
import finalBasketball from "../../assets/video/Men's Basketball Final Highlights Olympics 2020d.mp4"
import finalFootball from "../../assets/video/Brazil vs Germany - Men's Football Final Rio 2016d.mp4"
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const dispatch = useDispatch();
    const username = useSelector(state => state.User.username);
    const Watch = useSelector(state => state.Watch.lists);

    const [sport, setSport] = useState("Lionel Messi - 12 Most LEGENDARY Moments Ever in Football");
    const [video, setVideo] = useState(messi)

    const WishListHandler = async (e) => {
        e.preventDefault();
        const watch = { list: sport, username: username };
        const res = await AddWatch(watch);
        if (res) dispatch(addWatch({ lists: [...Watch, sport] }));
    }

    const SportArray = [
        {
            title: "Lionel Messi - 12 Most LEGENDARY Moments Ever in Football",
            video: messi
        },
        {
            title: "Men's basketball - Semi-final & final highlights - Tokyo Replays",
            video: finalBasketball
        }, {
            title: "Brazil vs. Germany - Men's Football Final Rio 2016",
            video: finalFootball
        }]

    const navigate = useNavigate();

    const VideoHandler = (e, title) => {
        e.preventDefault();
        if (!username) {
            navigate('/login')
            return;
        };
        navigate('/video', { state: { title: title + ".mp4", live: true } });
    }


    useEffect(() => {
        const timer = setInterval(() => {
            const random = Math.floor(Math.random() * SportArray.length);
            setSport(SportArray[random].title);
            setVideo(SportArray[random].video);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='dashboard'>
            <div className='spotlight'>
                <div className='background'>
                    <video className='highlight' src={video} autoPlay loop muted />
                </div>
                <div className='content'>
                    <h3>{sport}</h3>
                    <div><button onClick={(e) => VideoHandler(e, sport)} >Watch</button> <button className='wishlist' onClick={(e) => WishListHandler(e)}>+</button></div>
                </div>
            </div>
            <Hsuggestion title={"Popular Trends"} />
        </div >
    )
}

export default Dashboard