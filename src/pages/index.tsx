import Head from 'next/head'
import { TitleSection } from '../components/TitleSection'
import { VideoDepo } from '../components/VideoDepo'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Campanha Escola Crescer | Ajude nos</title>
      </Head>
      <div className={styles.sideBar}>
        <img src="/images/logoCrescer.svg" alt="Logotipo da Escola Crescer" />
      </div>
      <div className={styles.content}>
        <div className={styles.campaignArea}>
          <img src="/images/campaignImage.svg" alt="Imagem voltado para a campanha" />
          <div className={styles.textTitleCampaign}>
            <h1>CAMPANHA</h1>
            <h3>A ESCOLA CRESCER NÃO PODE FECHAR</h3>
          </div>
        </div>
        <TitleSection title={"OBJETIVO"} />
        <div className={styles.goalCampaign}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, at inventore et, vel culpa consectetur illum sequi sit minus exercitationem doloribus nihil placeat repellendus quo aperiam eligendi esse. Adipisci quibusdam recusandae tempore tempora inventore, optio incidunt a. A, cumque non rem mollitia eum ducimus numquam error dignissimos nobis assumenda, est dolorum qui nam adipisci voluptates doloremque veritatis reiciendis praesentium laborum possimus explicabo! Laudantium, ea impedit? Laudantium necessitatibus saepe at dolorem molestias unde tempore, reprehenderit atque praesentium non temporibus iure itaque dolor sapiente maxime in excepturi amet voluptatum quam architecto ab? Obcaecati cumque dicta totam at aspernatur perferendis nemo fuga, fugit est ut necessitatibus doloribus cum perspiciatis rem hic expedita dolorem repellendus et optio magnam tempora quo, illo corrupti dolorum! Quod et, numquam pariatur impedit dignissimos praesentium similique, omnis assumenda asperiores ex quia odio fugiat exercitationem laudantium quae. Ex aliquam consequatur placeat aut eum velit iusto nam at minus nobis.</p>
          <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
        </div>
        <TitleSection title={"HISTÓRIA"} />
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
        <TitleSection title={"DEPOIMENTOS"} />
        <div className={styles.depoSection}>
          <VideoDepo />
          <VideoDepo />
          <VideoDepo />
          <VideoDepo />
          <VideoDepo />
          <VideoDepo />
          <a href="#">Veja Mais</a>
        </div>
        <TitleSection title={"NOS AJUDE"} />
        <div className={styles.helpSection}>
          <h3>PIX 000.000.000-00</h3>
          <button>Doe pela Nossa Vakinha</button>
        </div>

      </div>
      <div className={styles.footer}>
        <p>Compartilhe nas redes sociais</p>
        <div className={styles.socialMedias}>
          <img src="/images/facebookIcon.svg" alt="Facebook" />
          <img src="/images/twitterIcon.svg" alt="Twitter" />
          <img src="/images/whatsappIcon.svg" alt="Whatsapp" />
          <img src="/images/instagramIcon.svg" alt="Instagram" />
        </div>
        <p>@Crescer2022</p>
      </div>
    </div>
  )
}