import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mt-4">
        <div className="row" style={{ fontWeight: 'bold' }}>
          <div className="col">
            Back
          </div>
          <div className="col">
            <div className="row">
              <div className="col text-center">
                DIGITAL ARTIST
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h3>BANKSY_IS_DEAD</h3>
              </div>
            </div>
          </div>
          <div className="col">
            <span className="float-end">Menu</span>
          </div>
        </div>

        <div className="row mt-5 justify-content-center" style={{ fontSize: '0.5rem' }}>
          <div className="col-md-2">
            <div>
              <Image src={img1} alt="testing" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              Description description
            </div>
            <div>
              <span className="price-tag">
                22,600
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Image src={img2} alt="testing" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="row">
              <div className="col">
                Description
              </div>
              <div className="col">
                <span className="float-end price-tag">
                  7,850
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <Image src={img3} alt="testing" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="row">
              <div className="col">
                Description text text
              </div>
              <div className="col">
                <span className="float-end price-tag">
                  10,330
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Image src={img7} alt="testing" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="row">
              <div className="col">
                Description
              </div>
              <div className="col">
                <span className="float-end price-tag">
                  2,150
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <Image src={img5} alt="testing" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="row">
              <div className="col">
                Description
              </div>
              <div className="col">
                <span className="float-end price-tag">
                  2,150
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-end">
          <div className="col-md-4">
            <div className="row">CHILDREN OF</div>
            <div className="row" style={{ fontWeight: 'bold', fontSize: '2rem' }}>FORGOTTEN</div>
            <div className="row" style={{ fontWeight: 'bold', fontSize: '2rem' }}>GOD</div>
          </div>
          <div className="col-md-3 align-self-center" style={{ fontWeight: 'bold', fontSize: '0.75rem' }}>EXPLORE MORE ARTWORKS</div>
          <div className="col-md-3 align-self-end">
            <span className="start-bidding-btn">
              START BIDDING
            </span>
          </div>
        </div>

        <div className="row justify-content-center text-center mt-5">
          <div className="col">
            Pellentesque...
          </div>
        </div>

        <div className="row justify-content-center text-center">
          <div className="col-md-8 fs-1">
            <span className="fw-bolder">Eget quis </span>
            <span className="fw-light">ultrices id <br />eu nec </span>
            <span className="fw-bolder">nulla. </span>
            <span className="sometimes-btn">Sometimes</span>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <Image src={img6} alt="testing" style={{ width: '100%', height: 'auto' }} />
            <div className="fw-bold">Description line here</div>
            <div>Subtitle line here</div>
          </div>
          <div className="col">
            <Image src={img7} alt="testing" style={{ width: '100%', height: 'auto' }} />
            <div className="fw-bold">Description line here</div>
            <div>Subtitle line here</div>
          </div>
          <div className="col">
            <Image src={img8} alt="testing" style={{ width: '100%', height: 'auto' }} />
            <div className="fw-bold">Description line here</div>
            <div>Subtitle line here</div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col fs-2" style={{ marginLeft: '5rem', marginRight: '2rem' }}>
            <div className="row">
              <div className="col">
                Odio morbi
              </div>
            </div>
            <div className="row fw-bolder text-end">
              <div className="col">
                Urna aliquam tinc
              </div>
            </div>
            <div className="row fw-bolder">
              <div className="col">
                Aliquam pellentesque
              </div>
            </div>
            <div className="row mt-5">
              <div className="col fs-6">
                <div style={{ marginLeft: '5rem' }}>
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis nulla verius.
                  Sed nunc nunc sagittis.
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <Image src={img9} alt="testing" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </main>
    </>
  )
}