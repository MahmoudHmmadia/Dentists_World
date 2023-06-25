// icons
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJavascript } from "react-icons/di";
import {
  SiSass,
  SiTypescript,
  SiMysql,
  SiCisco,
  SiNintendonetwork,
  SiPhp,
} from "react-icons/si";
import {
  FaBootstrap,
  FaReact,
  FaLaravel,
  FaSatelliteDish,
} from "react-icons/fa";
import { HiSwitchHorizontal } from "react-icons/hi";
import { MdRouter, MdEngineering, MdCable } from "react-icons/md";
import { HiServer } from "react-icons/hi";
// images
import serve1 from "../assets/images/serv1.png";
import serve2 from "../assets/images/serv2.png";
import serve3 from "../assets/images/serv3.png";
import serve4 from "../assets/images/serv4.png";
import serve5 from "../assets/images/serv5.png";
import serve6 from "../assets/images/serv6.png";
import orthodontics from "../assets/images/orthodontics.png";
import healthyFood from "../assets/images/healthyFood.png";
import wash from "../assets/images/wash.png";
import badFood from "../assets/images/badFood.png";
import cleanTooth from "../assets/images/cleanTooth.png";
import smook from "../assets/images/smook.png";
export const skillsInfo = [
  { icon: AiFillHtml5, color: "#f06529" },
  { icon: DiCss3, color: "#246de4" },
  { icon: DiJavascript, color: "#f0db4f" },
  { icon: SiTypescript, color: "#007acc" },
  { icon: SiSass, color: "#cd6799" },
  { icon: FaBootstrap, color: "#5e3b7f " },
  { icon: FaReact, color: "#61DBFB" },
  { icon: AiFillGithub, color: "#171515" },
  {
    icon: SiPhp,
    color: "#AEB2D5",
  },
  {
    icon: FaLaravel,
    color: "#F05340  ",
  },
  {
    icon: SiMysql,
    color: "#00758f",
  },
  { icon: SiCisco, color: "#f00" },
  { icon: HiSwitchHorizontal, color: "#ffa852" },
  { icon: MdRouter, color: "#c75959" },
  { icon: SiNintendonetwork, color: "#ff0" },
  { icon: MdCable, color: "#8cbdff" },
  { icon: HiServer, color: "#999" },
  { icon: FaSatelliteDish, color: "#ffa852" },
  { icon: MdEngineering, color: "#046c8d " },
];
export const services = [
  {
    image: serve1,
    title: "جراحة الفم و الأسنان",
    info: "في حالة نقص أسنان ، تراجع العظم ، جيوب أنفية منخفضة ، و من أجل ترميم الفم و الأسنان و استعادة وظائفهما ، ، هناك حاجة لإجراء عمليات جراحية ، حيث تتم هذه العمليات تحت تخدير موضعي و تشمل : زراعة الأسنان ، زراعة عظم ، رفع الجيوب الأنفية",
  },
  {
    image: serve2,
    title: "علاجات اللثة و دواعم السن",
    info: "في حال تعرض الطبقة الداعمة للسن ، و التي تتكون من اللثة و العظم و الألياف التي تربطهم بالسن ، هناك حاجة لإجراء علاج للثة و الدواعم",
  },
  {
    image: serve3,
    title: "علاجات قناة الجذر",
    info: "عندما يخترق التسوس طبقات السن الخارجية و يصل إلى اللب ، و هو الطبقة الداخلية التي تحتوي على الأعصاب و الأوعية الدموية ، فإن الطريقة الوحيدة لعلاج هذه الحالة قبل التهاب السن و تضرر الأنسجة العظمية هي علاج قناة جذر السن",
  },
  {
    image: serve4,
    title: "قلع الأسنان",
    info: "في حال تسوس السن و تلف طبقاته الخارجية و الداخلية بحيث لم يعد من الممكن إنقاذها ، يتم قلع السن",
  },
  {
    image: serve5,
    title: "العلاجات الترميمية",
    info: "عند الإنتهاء من العلاجات الوقائية ، هناك حاجة في حالات معينة ، كأسنان مكسورة أو علاج جذر ، لترميم السن من أجل المحافظة عليه و على وظائفه ، و تتم هذه العملية بمساعدة التيجان و الجسور",
  },
  {
    image: serve6,
    title: "تقويم الأسنان",
    info: "في حال نمو الأسنان بطريقة غير متوازية ، أو حصول تغيير جذري في مبنى الفكين ، هناك حاجة لتقويم الأسنان ، حيث يقوم التقويم بمعالجة حالة الفكين و ترتيب الأسنان و تحسين المظهر الخارجي",
  },
];
export const advices = [
  {
    title: "العناية بالأسنان مع التقويم",
    image: orthodontics,
    description: `
    ينصح باستخدام فرشاة خاصة من نوع
    Proxabrush
    لتنظيف تحت الأسلاك ، و إمساك الفرشاة بزاوية 45 درجة مع الحرص على أن تلامس جميع الأسطح 
    كما ينصح باستخدام 
    Floos Threaders
    لتسهيل استخدام خيط الأسنان 
    `,
  },
  {
    title: "تناول مأكولات صحية",
    image: healthyFood,
    description: `
     كالخصاوات و الفواكه المليئة بالألياف و منتجات الألبان و اللحوم الحمراء و المأكولات البحرية و العلكة الخالية من السكر ، و أخيراً لا تنسى شرب الماء لغناه الكبير بالفلوريدا 
    `,
  },
  {
    title: "الابتعاد عن المأكولات غير الصحية",
    image: badFood,
    description: `
    مثل المشروبات الحمضية و السكريات و المكسرات و الحلويات الاصقة و قطع الثلج و الفشار و الذرة
    
    `,
  },
  {
    title: "غسل اليدين",
    image: wash,
    description: `
    غسل اليدين جيداً قبل استخدام الفرشاة أو الخيط السني ، و لا ننسى تعقيم الفرشاة بشكل دوري بالكلور أو المعقمات الحولية
    `,
  },
  {
    title: "العناية بنظافة الأسنان",
    image: cleanTooth,
    description: `
    عن طريق تنظيفها مرتين يومياً ، و غسل جوف الفم باستخدام الغسول بعد تنظيف الأسنان بالفرشاة أو الخيط ، و تنظيف الأسنان بالخيط مرة واحدة باليوم على الأقل ، و زيارة الطبيب بشكل دوري ، كل ستة أشهر تقريباً ،  لزيارة الجير المتراكم على الأسنان
    
    `,
  },
  {
    title: "التدخين",
    image: smook,
    description: `
    يعد التدخين من أكبر أعداء الصحة الجسدية بشكل عام ، و الأسنان بشكل خاص ، فلذلك يجب التخلي عنه نهائياً
    `,
  },
];
