import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import TitleSection  from "../components/TitleSection";
import VideoDepo  from '../components/VideoDepo';

import {
  EmailShareButton,
  FacebookShareButton, 
  LinkedinShareButton,
  TelegramShareButton, 
  TwitterShareButton,
  WhatsappShareButton, 
} from "react-share";

import {
  EmailIcon, 
  LinkedinIcon,
  TelegramIcon
} from "react-share";

import styles from '../styles/Home.module.scss';
import Link from 'next/link';

interface VideoInfo {
  videoId: string;
};

interface HomeProps {
  data: {
    items: [
      {
        snippet: { 
          resourceId: VideoInfo;
        }
      }
    ]
  };
};

export default function Home({data}: HomeProps) {
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const videosInfoByData = data.items.map(video => ({
      videoId: video.snippet.resourceId.videoId
    }));

    setVideos(videosInfoByData);
  }, []);

  function handleSeeMore() {
    setSeeMore(true);
  }

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
          <p>
            Somos uma escola dedicada e compromissada com a educação de nossas crianças; durante vários anos temos procurado dar o melhor do que está ao nosso alcance, para que os nossos pequenos aprenda a dar os seus primeiros passos na vida através de um ensino sadio no caráter e no convívio com a sociedade; porque sabemos que é nos primeiros anos de vida do indivíduo que é formada a sua personalidade. Porém mesmo sendo uma das escolas de referência no ensino infantil em nossa cidade, temos tido uma grande necessidade para
            mantermos nossa escola funcionando; a necessidade urgente de uma sede própria.
          </p>
          <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
        </div>
        <TitleSection title={"HISTÓRIA"} />
        <div className={styles.historySchool}>
          <div className={styles.leftSide}>
            <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
            <p>
              A nossa escola nasceu da ideia de mães que queriam um ensino de qualidade e com um valor de mensalidade que fosse accessível. Essas mães em sua grande maioria, pertenciam a Igreja Presbiteriana do Brasil, localizada à rua Castro Alves, nº 73, Camacã - Bahia.<br />

              Assim, no ano de 1989 foi cedida uma sala nas dependências da Igreja Presbiteriana da nossa cidade, local onde teve início às primeiras aulas, apenas com crianças de 03 e 04 anos, com o nome de Escola Presbiteriana de Camacã;  com o passar do tempo e com a adesão de mais crianças a cada ano, foi-se formando mais turmas chegando até a alfabetização.<br />

              Após alguns anos de funcionamento, foi solicitado a desocupação do local, e a escola passou a funcionar em locais alugados, no total de 4 locais, e teve o seu nome alterado, passando a chamar-se Escola de Educação Infantil Crescer.<br />
            </p>
          </div>
          <div className={styles.rightSide}>
            <img src="https://source.unsplash.com/random" alt="random image by unsplash" />
            <p>
              Com a ajuda de Deus e muita luta, já conseguimos comprar um terreno, mas devido às grandes
              dificuldades financeiras em que temos vivido não só no nosso país, mas no mundo inteiro,
              ainda não foi possível construir a nossa escola; mas creio e sei que quando há solidariedade,
              quando as mãos se juntam muita coisa pode ser feita e é por isso que estamos aqui nos
              utilizando desse meio de ajuda mútua, para pedir a sua colaboração, a sua contribuição, para
              que possamos pelo menos iniciar a construção da nossa sede, o local próprio da escola crescer.
              Por favor não deixe nossa escola fechar as portas; só nós sabemos o quanto vai nos fazer falta
              se formos forçados a tomar tal atitude, pois, dependemos dessa escola para ajudar no
              sustento das nossas famílias e temos prazer em transmitir o nosso conhecimento para nossas
              crianças.<br />
              Abra o seu coração e faça sua doação, mesmo que seja o valor mínimo estipulado nessa
              campanha.
            </p>
          </div>
          <p className={styles.knowMore}>
            Conheça mais do nosso trabalho <a href="https://www.instagram.com/eeicrescer/" target="_blank" rel="noreferrer"><img src="/images/instagramIcon.svg" alt="Instagram" /></a>
          </p>
        </div>
        <TitleSection title={"DEPOIMENTOS"} />
        
        <div className={styles.depoSection}>
          {videos.map((video, index) => {
            if(!seeMore && index <= 5){
              console.log("Index: ", index);
              return(
                <VideoDepo key={video.videoId} embedVideoId={video.videoId}/>
              );
            } else if(seeMore){
              return(
                <VideoDepo key={video.videoId} embedVideoId={video.videoId}/>
              );
            }
          })}
          {!seeMore && 
            <div className={styles.seeMoreDepoSection}>
              <div className={styles.circleSideSeeMore}></div>
              <div className={styles.circleSideSeeMore}></div>
              <div className={styles.circleSideSeeMore}></div>
              <button onClick={handleSeeMore}>Veja Mais</button>
              <div className={styles.circleSideSeeMore}></div>
              <div className={styles.circleSideSeeMore}></div>
              <div className={styles.circleSideSeeMore}></div>
            </div>
          }
        </div>
        <TitleSection title={"NOS AJUDE"} />
        <div className={styles.helpSection}>
          <h3>PIX 000.000.000-00</h3>
          <a href={"http://vaka.me/2710047"} target={"_blank"} rel="noreferrer">
            <button>
                Doe pela Nossa Vakinha
            </button>
          </a>
        </div>
        <TitleSection title={"COMPARTILHE"} />
        <div className={styles.footer}>
          <p>Divulgue esta campanha nas redes sociais</p>
          <div className={styles.socialMedias}>
            <FacebookShareButton 
              url={"http://vaka.me/2710047"}
              quote={"Ajude a Escola Crescer! Precisamos de toda a ajuda possível para que a nossa escola não feche as portas."}
              hashtag={"#escolaCrescer, #campanhaEscolaCrescer, #ajudeEscolaCrescer"}
            >
              <img src="/images/facebookIcon.svg" alt="Facebook" />
            </FacebookShareButton>

            <TwitterShareButton
              url={"http://vaka.me/2710047"}
              title="Ajude a Escola Crescer! Precisamos de toda a ajuda possível para que a nossa escola não feche as portas."
              hashtags={["escolaCrescer", "campanhaEscolaCrescer", "ajudeEscolaCrescer"]}
            >
              <img src="/images/twitterIcon.svg" alt="Twitter" />
            </TwitterShareButton>

            <WhatsappShareButton
              url="http://vaka.me/2710047"
              title="Ajude a Escola Crescer! Precisamos de toda a ajuda possível para que a nossa escola não feche as portas."
            >
              <img src="/images/whatsappIcon.svg" alt="Whatsapp" />
            </WhatsappShareButton>

            {/* With Problem */}
            <LinkedinShareButton
              url="http://vaka.me/2710047"
              title="Ajude a Escola Crescer!"
              summary="Precisamos de toda a ajuda possível para que a nossa escola não feche as portas."
              source="Ajuda voltada para a Escola de Educação Infantil Crescer"
            >
              <LinkedinIcon size="40" borderRadius={50}/>
            </LinkedinShareButton>

            <TelegramShareButton
              url="http://vaka.me/2710047"
              title="Ajude a Escola Crescer! Precisamos de toda a ajuda possível para que a nossa escola não feche as portas."
            >
              <TelegramIcon size="40" borderRadius={50} />
            </TelegramShareButton>

            <EmailShareButton
              url="http://vaka.me/2710047"
              subject="Ajude a Escola Crescer!"
              body="Precisamos de toda a ajuda possível para que a nossa escola não feche as portas."
            >
              <EmailIcon size="40" borderRadius={50} />    
            </EmailShareButton>

          </div>
          <p>@Crescer2022</p>
        </div>
      </div>
    </div>
  )
}

// https://www.freecodecamp.org/news/how-to-add-a-youtube-playlist-to-a-nextjs-react-app-with-the-youtube-api/
export const getServerSideProps: GetServerSideProps = async () => {
  const responseYoutube = await fetch(`${process.env.YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.API_KEY_GOOGLE_YOUTUBE}`);
  
  const data = await responseYoutube.json();
  
  return {
    props: {data},
  }
  
}