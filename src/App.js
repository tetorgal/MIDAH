import React, { useState } from 'react';
import imagen from './Imagen1.jpg';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRipple,
  MDBTypography,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import './App.css'

function App() {

  const [showBasic, setShowBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const collapse = () => setShowShow(!showShow);
  return (
    <div className='App'>
      {/* Navbar */}
      <MDBNavbar expand='lg' dark className='bg-midnight font-extrabold fixed-top'>
        <MDBContainer fluid className='text-xl'>
          <MDBNavbarBrand href='#'>MIDAH</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Inicio
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle active tag='a' className='nav-link' role='button'>
                    Secciones
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active onClick={toggleShow}>Contactanos</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {/* Carousel */}
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className=''
          itemId={1}
          src='https://mdbootstrap.com/img/new/slides/041.jpg'
          alt='...'
        >
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt='...'
        >
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselItem>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/new/slides/043.jpg'
          alt='...'
        >
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselItem>
      </MDBCarousel>
      {/* ¿QUIENES SOMOS? */}
      <MDBCard className='mt-4 h-40 mb-7'>
        <MDBCardBody className='bg-midnight text-white'>
          <MDBCardTitle className=' hover:tracking-widest underline font-extrabold transition-all'>¿QUIÉNES SOMOS?</MDBCardTitle>
          <MDBCardText>
            Major Intelligence Development Advance es una empresa que se especializa en desarrollo software de vanguardia a compañías de todos los tamaños con un equipo de expertos en el campo de la tecnología, se esfuerza por crear soluciones que agilicen los procesos comerciales.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      {/* MISION Y VISION */}
      <MDBRow className='text-center m-5 items-center '>
        <MDBCol sm='6'>
          <MDBCard className='mt-4 h-40'>
            <MDBCardBody className='border-4 border-midnight rounded bg-slate-50 hover:bg-midnight hover:border-yellow-50 hover:text-white transition delay-100'>
              <MDBCardTitle className=' font-bold underline'>MISIÓN</MDBCardTitle>
              <MDBCardText>
                Ser líderes en el desarrollo de software de alta calidad, enfocados en la satisfacción del cliente y en la creación de soluciones innovadoras y escalables.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm='6'>
          <MDBCard className='mt-4'>
            <MDBCardBody className='border-4 border-midnight rounded bg-slate-50 hover:bg-midnight hover:border-yellow-50 hover:text-white transition delay-100'>
              <MDBCardTitle className=' font-bold underline'>VISIÓN</MDBCardTitle>
              <MDBCardText>
                Ser una empresa que cree soluciones tecnológicas innovadoras que mejoren la calidad de las personas e industrias, ofreciendo productos y servicios de alta calidad en la atención al cliente para el año 2030.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* ANTECEDENTES */}
      <MDBTypography tag='h1' className='text-white tracking-widest'>ANTECEDENTES</MDBTypography>
      <MDBRow className='text-center m-5 flex items-center justify-items-center ' >
        <MDBCol lg='5' md='6'>
          <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom'>
            <img
              src='https://tecolotito.elsiglodedurango.com.mx/cdn-cgi/image/format=auto,width=1024/i/2022/11/1119416.jpeg'
              className='img-fluid rounded'
              alt=''
            />
          </MDBRipple>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-40'>
            <MDBCardBody className=' bg-midnight text-white rounded flex items-center'>
              <MDBCardText>
                Un 3 de mayo de 2022 en Durango, Durango, México; en la Universidad Tecnológica de Durango se tuvo como propuesta realizar un proyecto integrador en el cual se le tenía que dar solución con mano de la tecnología a un problema de la vida real.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className='text-center m-5 flex items-center justify-items-center' >
        <MDBCol>
          <MDBCard className='h-40 m-0'>
            <MDBCardBody className=' bg-midnight text-white rounded flex items-center'>
              <MDBCardText>
                Galarza Carreño Héctor Fernando, Herrera Ruiz Adalid, León Quintana Graciela Irene, Santillán Ledesma María Fernanda y Torres Olivas Derek Omar son las personas que decidieron formar la empresa “MIDAH”.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' md='6'>
          <MDBRipple className='bg-image'>
            <img
              src='https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-teamwork-cartoon-illustration-image_1427059.jpg'
              className='img-fluid rounded-circle'
              width={300}
              alt=''
            />
          </MDBRipple>
        </MDBCol>
      </MDBRow>
      {/* SERVICIOS */}
      <MDBTypography tag='h1' className='text-white tracking-widest'>SERVICIOS</MDBTypography>
      <MDBRow className='text-center m-5 flex items-center justify-items-center '>
        <MDBCol>
          <MDBCard style={{ maxWidth: '540px' }}>
          <MDBRipple rippleTag='div' className=' hover-overlay hover-zoom'>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
          <MDBRipple rippleTag='div' className=' hover-overlay hover-zoom'>
                <MDBCardImage src='https://cdn-icons-png.flaticon.com/512/2694/2694860.png' alt='...' fluid />
          </MDBRipple>
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody className='bg-midnight text-white border-1 border-white rounded'>
                  <MDBCardTitle className='underline tracking-widest font-semibold'>Comunicación constante</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBRipple>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ maxWidth: '540px' }} >
          <MDBRipple rippleTag='div' className=' hover-overlay hover-zoom'>
            <MDBRow className='g-0 flex items-center'>
              <MDBCol md='8'>
                <MDBCardBody className='bg-midnight text-white border-1 border-white rounded'>
                  <MDBCardTitle className='underline tracking-widest font-semibold'>Servicios personalizados</MDBCardTitle>
                  <MDBCardText>
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md='4'>
                <MDBCardImage src='https://cdn-icons-png.flaticon.com/512/10185/10185524.png' alt='...' fluid />
              </MDBCol>
            </MDBRow>
          </MDBRipple>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* VALORES */}
      <MDBBtn tag='s' onClick={collapse}>
        Link
      </MDBBtn>
      <MDBCollapse show={showShow}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse>
      {/* FOOTER */}
      <MDBCard className='mt-4'>
        <MDBCardBody className='bg-midnight text-white grid  justify-center'>
          <MDBCardTitle><img
            src={imagen}
            className='img-thumbnail w-52 h-52'
            alt='...'
          /></MDBCardTitle>
          <MDBCardText>
            aasasasasas
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
      {/* Modal */}
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default App;
