import style from "./photo.module.scss";

const baseURL = "/imgs/ministry/youthful/";

const photoList = [
  { src: `${baseURL}youthful-${1}.png` },
  { src: `${baseURL}youthful-${2}.png` },
  { src: `${baseURL}youthful-${3}.png` },
  { src: `${baseURL}youthful-${4}.png` },
  { src: `${baseURL}youthful-${5}.png` },
  { src: `${baseURL}youthful-${6}.png` },
];

export default function PhotoList() {
  return (
    <section className={`inner ${style.section}`}>
      <h1 className={style.title}>청년부 활동 사진</h1>
      <div className={style.list}>
        {photoList.map((p, i) => (
          <div key={i} className={style.img}>
            <img src={p.src} alt="청년부 사진" />
          </div>
        ))}
      </div>
    </section>
  );
}
