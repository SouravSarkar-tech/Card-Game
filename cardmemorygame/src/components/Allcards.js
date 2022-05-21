import { useState } from 'react'
import Card from './Card'

function Allcards(){
    const [items, setItems] = useState([
        { id: 1, img: '/img/kisspng-android-nougat-emoji-android-oreo-binary-large-obj-5af82e8b305e20.8434632015262142831981.png', stat: "" },
        { id: 1, img: '/img/kisspng-android-nougat-emoji-android-oreo-binary-large-obj-5af82e8b305e20.8434632015262142831981.png', stat: "" },
        { id: 2, img: '/img/kisspng-emoji-android-marshmallow-github-android-nougat-smiling-eyes-5aec91cac55b27.2305027315254532588084.png', stat: "" },
        { id: 2, img: '/img/kisspng-emoji-android-marshmallow-github-android-nougat-smiling-eyes-5aec91cac55b27.2305027315254532588084.png', stat: "" },
        { id: 3, img: '/img/kisspng-emoji-android-nougat-android-oreo-android-marshmal-emoji-essen-5b4a949296ae98.4673835515316143546172.png', stat: "" },
        { id: 3, img: '/img/kisspng-emoji-android-nougat-android-oreo-android-marshmal-emoji-essen-5b4a949296ae98.4673835515316143546172.png', stat: "" },
        { id: 4, img: '/img/kisspng-emoji-android-nougat-emoji-5ad290b0decc19.2590272515237490409126.png', stat: "" },
        { id: 4, img: '/img/kisspng-emoji-android-nougat-emoji-5ad290b0decc19.2590272515237490409126.png', stat: "" },
        { id: 5, img: '/img/kisspng-emoji-android-nougat-heart-emoticon-sunglasses-emoji-5ac770728fa813.6234833415230198905884.png', stat: "" },
        { id: 5, img: '/img/kisspng-emoji-android-nougat-heart-emoticon-sunglasses-emoji-5ac770728fa813.6234833415230198905884.png', stat: "" },
        { id: 6, img: '/img/kisspng-emoji-android-nougat-unicode-emoticon-svg-5aca904a322008.0778470915232246502053.png', stat: "" },
        { id: 6, img: '/img/kisspng-emoji-android-nougat-unicode-emoticon-svg-5aca904a322008.0778470915232246502053.png', stat: "" },
        { id: 7, img: '/img/kisspng-emoji-android-nougat-unicode-noto-fonts-tired-5ac6ee20665897.1674426115229865284192.png', stat: "" },
        { id: 7, img: '/img/kisspng-emoji-android-nougat-unicode-noto-fonts-tired-5ac6ee20665897.1674426115229865284192.png', stat: "" },
        { id: 8, img: '/img/kisspng-emoji-frown-android-email-google-frowning-5adff63a158030.4492043715246270020881.png', stat: "" },
        { id: 8, img: '/img/kisspng-emoji-frown-android-email-google-frowning-5adff63a158030.4492043715246270020881.png', stat: "" },
        { id: 9, img: '/img/kisspng-emoji-noto-fonts-wikipedia-smile-google-smile-people-5b21ff92a05b25.2263804915289547706568.png', stat: "" },
        { id: 9, img: '/img/kisspng-emoji-noto-fonts-wikipedia-smile-google-smile-people-5b21ff92a05b25.2263804915289547706568.png', stat: "" },
        { id: 10, img: '/img/kisspng-emojipedia-android-nougat-noto-fonts-emoji-face-5abd7cf72b0014.4670388715223677351761.png', stat: "" },
        { id: 10, img: '/img/kisspng-emojipedia-android-nougat-noto-fonts-emoji-face-5abd7cf72b0014.4670388715223677351761.png', stat: "" },
        { id: 11, img: '/img/kisspng-emojipedia-emoticon-android-nougat-emoji-expression-frame-5ae0fef19c3036.9761244315246947696398.png', stat: "" },
        { id: 11, img: '/img/kisspng-emojipedia-emoticon-android-nougat-emoji-expression-frame-5ae0fef19c3036.9761244315246947696398.png', stat: "" },
        { id: 12, img: '/img/kisspng-emoji-perspiration-telegram-sticker-emoticon-emoji-face-5abd7d6f2048e5.9963791015223678551323.png', stat: "" },
        { id: 12, img: '/img/kisspng-emoji-perspiration-telegram-sticker-emoticon-emoji-face-5abd7d6f2048e5.9963791015223678551323.png', stat: "" },
        { id: 13, img: '/img/kisspng-emoji-wink-noto-fonts-smiley-tongue-5ab5fb634a3472.314081561521875811304.png', stat: "" },
        { id: 13, img: '/img/kisspng-emoji-wink-noto-fonts-smiley-tongue-5ab5fb634a3472.314081561521875811304.png', stat: "" },
        { id: 14, img: '/img/kisspng-emoticon-emojipedia-smiley-blog-5ad8261cee9f56.1290091015241149729774.png', stat: "" },
        { id: 14, img: '/img/kisspng-emoticon-emojipedia-smiley-blog-5ad8261cee9f56.1290091015241149729774.png', stat: "" },
        { id: 15, img: '/img/kisspng-smiley-emoji-android-oreo-emoticon-coller-5b2da7a3adc5c4.6194465215297186917118.png', stat: "" },
        { id: 15, img: '/img/kisspng-smiley-emoji-android-oreo-emoticon-coller-5b2da7a3adc5c4.6194465215297186917118.png', stat: "" },
       
    ].sort(() => Math.random() - 0.5))
    

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Allcards