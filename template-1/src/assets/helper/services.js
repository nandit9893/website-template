import html_logo from "../../assets/html_logo.png";
import css_logo from "../../assets/css.png";
import javascript_logo from "../../assets/javascript.png";
import expres_logo from "../../assets/express.jpeg";
import mongodb_logo from "../../assets/mongodb.png";
import node_logo from "../../assets/nodejs.png";
import react_logo from "../../assets/reactjs.png";
import redux_logo from "../../assets/redux.png";
import tailwind_logo from "../../assets/tailwind.png";
import cloudfare_logo from "../../assets/cloudfare.jpg";
import cyberark_logo from "../../assets/cyberark.jpg";
import firewall_logo from "../../assets/firewall.jpg";
import kalilinux_logo from "../../assets/kalilinux.jpg";
import mcafee_logo from "../../assets/mcafee.jpg";
import openvpn_logo from "../../assets/openvpn.jpg";
import aws_logo from "../../assets/aws.jpg";
import computeengine_logo from "../../assets/computeengine.jpg";
import docker_logo from "../../assets/docker.jpg";
import jenkins_logo from "../../assets/jenkins.jpg";
import terraform_logo from "../../assets/terraform.jpg";
import vmware_logo from "../../assets/vmware.jpg";
import googlebert_logo from "../../assets/googlebert.jpg";
import gpu_logo from "../../assets/gpu.jpg";
import julia_logo from "../../assets/julia.jpg";
import nlp_logo from "../../assets/nlp.jpg";
import opencv_logo from "../../assets/opencv.jpg";
import r_logo from "../../assets/r.jpg";
import tenserflow_logo from "../../assets/tenserflow.jpg";
import xgboost_logo from "../../assets/xgboost.jpg";

const services = [
  {
    _id: 1,
    title: "Web Development",
    subtitle:
      "Web development involves creating websites and web applications using HTML, CSS, and JavaScript. It includes frontend frameworks like React and backend technologies like Node.js, Express, and MongoDB. Modern development ensures responsive, dynamic, and interactive user experiences across various platforms.",
    technologies: [
      html_logo,
      css_logo,
      javascript_logo,
      expres_logo,
      mongodb_logo,
      node_logo,
      react_logo,
      redux_logo,
      tailwind_logo,
    ],
  },
  {
    _id: 2,
    title: "Cyber Security",
    subtitle:
      "Cybersecurity protects systems and data from cyber threats like malware, hacking, and phishing. It involves encryption, firewalls, multi-factor authentication, and intrusion detection to safeguard information, ensuring secure networks and systems.",
    technologies: [
      cloudfare_logo,
      cyberark_logo,
      firewall_logo,
      kalilinux_logo,
      mcafee_logo,
      openvpn_logo,
    ],
  },
  {
    _id: 3,
    title: "Cloud Solutions",
    subtitle:
      "Cloud solutions offer scalable computing, storage, and processing power without physical servers. Businesses use IaaS, PaaS, and SaaS to manage applications efficiently, reducing costs while improving accessibility and performance.",
    technologies: [
      aws_logo,
      computeengine_logo,
      docker_logo,
      jenkins_logo,
      terraform_logo,
      vmware_logo,
    ],
  },
  {
    _id: 4,
    title: "AI & ML",
    subtitle:
      "AI and ML enable systems to learn from data and improve decision-making. They power automation, fraud detection, natural language processing, and personalized recommendations, driving innovation across industries.",
    technologies: [
      googlebert_logo,
      gpu_logo,
      julia_logo,
      nlp_logo,
      opencv_logo,
      r_logo,
      tenserflow_logo,
      xgboost_logo,
    ],
  },
];

export default services;
