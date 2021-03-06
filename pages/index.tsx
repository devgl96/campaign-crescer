import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import TitleSection from '../components/TitleSection';
import VideoDepo from '../components/VideoDepo';

import styles from '../styles/Home.module.scss';

import { FiClipboard } from "react-icons/fi";

import { 
  EmailIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  TelegramIcon, 
  TwitterIcon,
  WhatsappIcon 
} from 'react-share';

import { 
  EmailShareButton, 
  FacebookShareButton, 
  LinkedinShareButton, 
  TelegramShareButton, 
  TwitterShareButton,
  WhatsappShareButton 
} from 'react-share';
import { useEffect, useState } from 'react';

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

const Home = ({data}: HomeProps) => {
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [seeMore, setSeeMore] = useState(false);
  const [copyText, setCopyText] = useState(false);

  useEffect(() => {
    if(data.items.length > 0) {
      getVideosByYoutube();
    } else {
      setVideos([]);
    }

  }, [videos]);

  function getVideosByYoutube() {
    const videosInfoByData = data.items.map(video => ({
      videoId: video.snippet.resourceId.videoId
    }));

    setVideos(videosInfoByData);
  }

  function handleSeeMore() {
    setSeeMore(true);
  }

  function copyPIX() {
    setCopyText(true);
    navigator.clipboard.writeText("2710047@vakinha.com.br");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Campanha Escola Crescer | Ajude nos</title>
      </Head>
      <div className={styles.sideBar}>
        <div className={styles.imageSideBar}>  
          <Image 
            src="/images/logoCrescer.svg" alt="Logotipo da Escola Crescer" 
            layout="responsive"
            width="275px"
            height="700px"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.campaignArea}>
          <Image 
            src="/images/campaignImage.svg" 
            alt="Imagem voltado para a campanha" 
            width="250px"
            height="300px"
            layout="intrinsic"
          />
          <div className={styles.textTitleCampaign}>
            <h1>CAMPANHA</h1>
            <h3>A ESCOLA CRESCER N??O PODE FECHAR</h3>
          </div>
        </div>
        <TitleSection title={"OBJETIVO"} />
        <div className={styles.goalCampaign}>
          <p>
            Somos uma escola dedicada e compromissada com a educa????o de nossas crian??as; durante v??rios anos temos procurado dar o melhor do que est?? ao nosso alcance, para que os nossos pequenos aprenda a dar os seus primeiros passos na vida atrav??s de um ensino sadio no car??ter e no conv??vio com a sociedade; porque sabemos que ?? nos primeiros anos de vida do indiv??duo que ?? formada a sua personalidade. Por??m mesmo sendo uma das escolas de refer??ncia no ensino infantil em nossa cidade, temos tido uma grande necessidade para
            mantermos nossa escola funcionando; a necessidade urgente de uma sede pr??pria.
          </p>
          <img src="/images/sonhoSedePropria.png" alt="Sonho sede pr??pria da Escola Crescer" />
        </div>
        <TitleSection title={"HIST??RIA"} />
        <div className={styles.historySchool}>
          <div className={styles.leftSide}>
            <img src="/images/fotoAntigaEscolaCrescer1996.png" alt="Foto da turma de 1996 da escola em frente ao primeiro lugar da escola que foi na Igreja Presbiteriana do Brasil" />
            <p>
              A nossa escola nasceu da ideia de m??es que queriam um ensino de qualidade e com um valor de mensalidade que fosse access??vel. Essas m??es em sua grande maioria, pertenciam a Igreja Presbiteriana do Brasil, localizada ?? rua Castro Alves, n?? 73, Camac?? - Bahia.<br />

              Assim, no ano de 1989 foi cedida uma sala nas depend??ncias da Igreja Presbiteriana da nossa cidade, local onde teve in??cio ??s primeiras aulas, apenas com crian??as de 03 e 04 anos, com o nome de Escola Presbiteriana de Camac??;  com o passar do tempo e com a ades??o de mais crian??as a cada ano, foi-se formando mais turmas chegando at?? a alfabetiza????o.<br />

              Ap??s alguns anos de funcionamento, foi solicitado a desocupa????o do local, e a escola passou a funcionar em locais alugados, no total de 4 locais, e teve o seu nome alterado, passando a chamar-se Escola de Educa????o Infantil Crescer.<br />
            </p>
          </div>
          <div className={styles.rightSide}>
            <img src="/images/fotoAntigaEscolaCrescer2008.png" alt="Foto da turma de 2008 da escola em frente ao segundo lugar da escola que foi na rua Castro Alves. " />
            <p>
              Com a ajuda de Deus e muita luta, j?? conseguimos comprar um terreno, mas devido ??s grandes
              dificuldades financeiras em que temos vivido n??o s?? no nosso pa??s, mas no mundo inteiro,
              ainda n??o foi poss??vel construir a nossa escola; mas creio e sei que quando h?? solidariedade,
              quando as m??os se juntam muita coisa pode ser feita e ?? por isso que estamos aqui nos
              utilizando desse meio de ajuda m??tua, para pedir a sua colabora????o, a sua contribui????o, para
              que possamos pelo menos iniciar a constru????o da nossa sede, o local pr??prio da escola crescer.
              Por favor n??o deixe nossa escola fechar as portas; s?? n??s sabemos o quanto vai nos fazer falta
              se formos for??ados a tomar tal atitude, pois, dependemos dessa escola para ajudar no
              sustento das nossas fam??lias e temos prazer em transmitir o nosso conhecimento para nossas
              crian??as.<br />
              Abra o seu cora????o e fa??a sua doa????o, mesmo que seja o valor m??nimo estipulado nessa
              campanha.
            </p>
          </div>
          <p className={styles.knowMore}>
            Conhe??a mais do nosso trabalho 
            <a href="https://www.instagram.com/eeicrescer/" target="_blank" rel="noreferrer">
              <img src="/images/instagramIcon.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/Educa%C3%A7%C3%A3o-Infantil-Crescer-1776891455886732" target="_blank" rel="noreferrer">
              <FacebookIcon size={65} borderRadius={10} />
            </a>
          </p>
        </div>
        <TitleSection title={"DEPOIMENTOS"} />
        
        <div className={styles.depoSection}>
          {videos.length > 0 ? videos.map((video, index) => {
            if(!seeMore && index <= 5){
              return(
                <VideoDepo key={video.videoId} embedVideoId={video.videoId}/>
              );
            } else if(seeMore){
              return(
                <VideoDepo key={video.videoId} embedVideoId={video.videoId}/>
              );
            }
          })
            :
            (
              <h1>Sem depoimentos no momento!</h1>
            )
          }
          {!seeMore && videos.length > 6 && 
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
          <h3>
            PIX 2710047@vakinha.com.br 
            <FiClipboard size={45} onClick={copyPIX}/>
            <h6 className={styles.copyText}>{copyText ? "Copiado!" : ""}</h6>
          </h3>
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
              quote={"Ajude a Escola Crescer! Precisamos de toda a ajuda poss??vel para que a nossa escola n??o feche as portas."}
              hashtag={"#escolaCrescer, #campanhaEscolaCrescer, #ajudeEscolaCrescer"}
            >
              <FacebookIcon size="40" borderRadius={50} />
            </FacebookShareButton>

            <TwitterShareButton
              url={"http://vaka.me/2710047"}
              title="Ajude a Escola Crescer! Precisamos de toda a ajuda poss??vel para que a nossa escola n??o feche as portas."
              hashtags={["escolaCrescer", "campanhaEscolaCrescer", "ajudeEscolaCrescer"]}
            >
              <TwitterIcon size="40" borderRadius={50} />
            </TwitterShareButton>

            <WhatsappShareButton
              url="http://vaka.me/2710047"
              title="Ajude a Escola Crescer! Precisamos de toda a ajuda poss??vel para que a nossa escola n??o feche as portas."
            >
              <WhatsappIcon size="40" borderRadius={50} />
            </WhatsappShareButton>

            
            <LinkedinShareButton
              url="http://vaka.me/2710047"
              title="Ajude a Escola Crescer!"
              summary="Precisamos de toda a ajuda poss??vel para que a nossa escola n??o feche as portas."
              source="Ajuda voltada para a Escola de Educa????o Infantil Crescer"
            >
              <LinkedinIcon size="40" borderRadius={50}/>
            </LinkedinShareButton>

            <TelegramShareButton
              url="http://vaka.me/2710047"
              title="Ajude a Escola Crescer! Precisamos de toda a ajuda poss??vel para que a nossa escola n??o feche as portas."
            >
              <TelegramIcon size="40" borderRadius={50} />
            </TelegramShareButton>

            <EmailShareButton
              url="http://vaka.me/2710047"
              subject="Ajude a Escola Crescer!"
              body="Precisamos de toda a ajuda poss??vel para que a nossa escola n??o feche as portas."
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

export const getServerSideProps: GetServerSideProps = async () => {
  const responseYoutube = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${process.env.PLAYLIST_ID_YOUTUBE}&key=${process.env.KEY_API_YOUTUBE}`);
  
  const data = await responseYoutube.json();
  
  return {
    props: {data},
  } 
}

export default Home
