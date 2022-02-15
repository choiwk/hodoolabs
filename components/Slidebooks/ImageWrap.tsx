import Image from 'next/image';

function ImageWrap() {
  const ImageList = [
    { id: 1, src: 'https://ddangkongschool.com/474113b7a462536f3ca1955b7fec6bbb.png' },
    { id: 2, src: 'https://ddangkongschool.com/627d7b2ad2821586a58450e0dc871a3d.png' },
    { id: 3, src: 'https://ddangkongschool.com/657c46360efed4fa0ccb656bfac398f0.png' },
    { id: 4, src: 'https://ddangkongschool.com/4da5edcf4bea762206b0059962021dcc.png' },
    { id: 5, src: 'https://ddangkongschool.com/da96593c7493f242ef328db64fb7746d.png' },
    { id: 6, src: 'https://ddangkongschool.com/a0fbbb3a1186a1d7183d940624be114d.png' },
    { id: 7, src: 'https://ddangkongschool.com/b2bf823874937bca0b269f06c7c00fb9.png' },
    { id: 8, src: 'https://ddangkongschool.com/3cb2b06e2e0e22c7b5fa8e6245396317.png' },
    { id: 9, src: 'https://ddangkongschool.com/9f314886272fbd7e8cd10dd9329e6c5a.png' },
    { id: 10, src: 'https://ddangkongschool.com/153f54f0072d2126def81f6fcae5958c.png' },
    { id: 11, src: 'https://ddangkongschool.com/c0e0bac49fe7efacb533befaafe79738.png' },
    { id: 12, src: 'https://ddangkongschool.com/471b07fc6c22192fe9e0a861c59e9369.png' },
    { id: 13, src: 'https://ddangkongschool.com/fac66aeef4521c3961a3f5b3d36984db.png' },
    { id: 14, src: 'https://ddangkongschool.com/c516ede129102cb58b2003fa9f0c7e28.png' },
    { id: 15, src: 'https://ddangkongschool.com/8d60b961e9767185e5346c5db4f18635.png' },
    { id: 16, src: 'https://ddangkongschool.com/474113b7a462536f3ca1955b7fec6bbb.png' },
    { id: 17, src: 'https://ddangkongschool.com/627d7b2ad2821586a58450e0dc871a3d.png' },
    { id: 18, src: 'https://ddangkongschool.com/657c46360efed4fa0ccb656bfac398f0.png' },
    { id: 19, src: 'https://ddangkongschool.com/4da5edcf4bea762206b0059962021dcc.png' },
    { id: 20, src: 'https://ddangkongschool.com/da96593c7493f242ef328db64fb7746d.png' },
    { id: 21, src: 'https://ddangkongschool.com/a0fbbb3a1186a1d7183d940624be114d.png' },
    { id: 22, src: 'https://ddangkongschool.com/b2bf823874937bca0b269f06c7c00fb9.png' },
    { id: 23, src: 'https://ddangkongschool.com/3cb2b06e2e0e22c7b5fa8e6245396317.png' },
    { id: 24, src: 'https://ddangkongschool.com/9f314886272fbd7e8cd10dd9329e6c5a.png' },
    { id: 25, src: 'https://ddangkongschool.com/153f54f0072d2126def81f6fcae5958c.png' },
    { id: 26, src: 'https://ddangkongschool.com/c0e0bac49fe7efacb533befaafe79738.png' },
    { id: 27, src: 'https://ddangkongschool.com/471b07fc6c22192fe9e0a861c59e9369.png' },
    { id: 28, src: 'https://ddangkongschool.com/fac66aeef4521c3961a3f5b3d36984db.png' },
    { id: 29, src: 'https://ddangkongschool.com/c516ede129102cb58b2003fa9f0c7e28.png' },
    { id: 30, src: 'https://ddangkongschool.com/8d60b961e9767185e5346c5db4f18635.png' },
  ];
  return (
    <>
      {ImageList.map((el) => {
        return (
          <div key={el.id}>
            <Image src={el.src} alt='slide-image' width={188} height={250} />
          </div>
        );
      })}
    </>
  );
}

export default ImageWrap;
