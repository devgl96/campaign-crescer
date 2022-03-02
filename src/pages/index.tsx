import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { titleSection } from '../components/titleSection'
import { videoDepo } from '../components/videoDepo'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}></div>
      <div className={styles.content}>
        <div className={styles.campaignArea}>
          <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
          <h1>Campanha</h1>
          <h3>A ESCOLA CRESCER NÃO PODE FECHAR</h3>
        </div>
        <titleSection />
        <div className={styles.goalCampaign}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, at inventore et, vel culpa consectetur illum sequi sit minus exercitationem doloribus nihil placeat repellendus quo aperiam eligendi esse. Adipisci quibusdam recusandae tempore tempora inventore, optio incidunt a. A, cumque non rem mollitia eum ducimus numquam error dignissimos nobis assumenda, est dolorum qui nam adipisci voluptates doloremque veritatis reiciendis praesentium laborum possimus explicabo! Laudantium, ea impedit? Laudantium necessitatibus saepe at dolorem molestias unde tempore, reprehenderit atque praesentium non temporibus iure itaque dolor sapiente maxime in excepturi amet voluptatum quam architecto ab? Obcaecati cumque dicta totam at aspernatur perferendis nemo fuga, fugit est ut necessitatibus doloribus cum perspiciatis rem hic expedita dolorem repellendus et optio magnam tempora quo, illo corrupti dolorum! Quod et, numquam pariatur impedit dignissimos praesentium similique, omnis assumenda asperiores ex quia odio fugiat exercitationem laudantium quae. Ex aliquam consequatur placeat aut eum velit iusto nam at minus nobis.</p>
        </div>
        <titleSection />
        <div className={styles.historySchool}>
          <div className={styles.leftSide}>
            <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ducimus alias, nobis facilis, fuga mollitia perspiciatis, a recusandae sed cumque nam aliquam corporis ex placeat tenetur. Consectetur, laborum at? Corrupti architecto laborum illum aliquam ipsum tempora aperiam rem impedit consequuntur modi quod nesciunt, dignissimos iste aspernatur harum rerum ipsam veniam!</p>
          </div>
          <div className={styles.rightSide}>
            <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam consequuntur repellendus reiciendis, commodi consectetur ipsam vitae dolor modi facilis. Quaerat saepe consectetur quam suscipit architecto eos mollitia cupiditate, incidunt numquam necessitatibus odit a neque distinctio doloremque repellat. Reiciendis, repellat. Ratione nostrum rerum atque quasi, culpa cum doloribus distinctio voluptatibus maxime sed vitae doloremque, dolorum saepe praesentium, inventore fugiat facilis dolor neque quas blanditiis! Dignissimos iste officia corporis cupiditate in cum eius aliquid recusandae blanditiis? </p>
          </div>
          <p>Conheça mais do nosso trabalho</p>
        </div>
        <titleSection />
        <div className={styles.depoSecti}>
          <videoDepo />
          <videoDepo />
          <videoDepo />
          <videoDepo />
          <videoDepo />
          <videoDepo />
          <a href="#">Veja Mais</a>
        </div>
        <div className={styles.helpSe}>
          <h3>PIX 000.000.000-00</h3>
          <button>Doe pela Nossa Vakinha</button>
        </div>

      </div>
      <div className={styles.footer}>
        <p>Compartilhe nas redes sociais</p>
        <div className={styles.socialMedias}>

        </div>
        <p>@Crescer2022</p>
      </div>
    </div>
  )
}

export default Home
