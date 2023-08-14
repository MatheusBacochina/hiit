import Image from "next/image";
import { MethodWasCreateSectionText } from "@/components/MethodWasCreateSectionText";
export const MethodWasCreateSection = () => {
  return (
    <div className="flex justify-center px-24">
      <div className="relative flex grow-0 basis-[1092px] flex-col justify-between   ">
        <Image
          className="animate__image__top astronautfront__shadow ml-28 flex-shrink-0 -translate-y-1/4"
          src="/images/main/astronautfront.png"
          width={278}
          height={278}
          alt="Picture of the author"
        />

        <div className=" relative flex justify-between  max-lg:justify-center max-lg:px-10 max-sm:px-4 ">
          <div className="light__blur absolute left-[-150px] top-[-192px]" />
          <div className=" relative basis-[500px]  flex-col">
            <h1 className="border__text__Method pb-12 text-3xl font-bold uppercase tracking-widest  text-white">
              Todo o Método do HITT foi criado pensando em você que:
            </h1>
            <MethodWasCreateSectionText
              text="Sofre com a falta de tempo por causa de uma rotina apertada e quer um
        protocolo simples e eficaz de estudos."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M0 16.9639C0.0700308 7.41516 7.65287 -0.0145035 16.991 2.126e-05C26.4572 0.014546 34.0145 7.48528 34 17.019C33.9855 26.4226 26.5512 33.9905 16.9735 34C7.57384 34.009 0.0480212 26.4942 0 16.9639ZM16.97 31.8664C24.955 31.9199 31.8295 25.4244 31.8525 17.0661C31.875 8.82607 25.2366 2.14167 17.0505 2.13516C8.79938 2.12865 2.15945 8.73091 2.17146 16.9654C2.18396 25.4334 8.93143 31.8353 16.97 31.8658V31.8664Z"
                  fill="white"
                />
                <path
                  d="M18.116 11.4571C18.116 13.1424 18.119 14.8278 18.112 16.5127C18.111 16.729 18.1745 16.8863 18.3286 17.0406C19.9703 18.6884 21.6065 20.3417 23.2412 21.9965C23.7325 22.4934 23.7345 23.1159 23.2577 23.5652C22.8396 23.9589 22.1863 23.9438 21.7441 23.5126C21.2008 22.9832 20.6696 22.4413 20.1334 21.9044C18.9313 20.7008 17.7333 19.4938 16.5253 18.2962C16.1051 17.8795 15.8985 17.3972 15.9 16.7992C15.9085 13.3368 15.904 9.87436 15.9045 6.41245C15.9045 5.82595 16.1776 5.40173 16.6553 5.23344C17.3651 4.98302 18.1095 5.54798 18.1135 6.35135C18.1195 7.611 18.115 8.87065 18.115 10.1308C18.115 10.573 18.115 11.0153 18.115 11.4576L18.116 11.4571Z"
                  fill="white"
                />
              </svg>
            </MethodWasCreateSectionText>
            <MethodWasCreateSectionText text="Está com conteúdos atrasados, esqueceu assuntos do início do ano e precisa refrescar a memória.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="34"
                viewBox="0 0 46 34"
                fill="none"
              >
                <path
                  d="M32.3892 20.6256C31.2837 20.64 30.1901 20.8015 29.0918 20.9039C27.4487 21.0569 25.8082 21.2348 24.1664 21.4015C22.329 21.5886 20.4916 21.7764 18.6541 21.9608C17.0012 22.1269 15.3423 22.2464 13.6979 22.4735C12.8609 22.5891 12.2478 22.3508 11.6025 21.844C7.92893 18.9595 4.22651 16.1118 0.534587 13.251C-0.0713233 12.7816 -0.172418 12.0884 0.28382 11.5731C0.520145 11.3065 0.833275 11.2245 1.16873 11.2087C2.7521 11.1352 4.33613 11.0663 5.91951 10.996C6.46568 10.9717 7.01185 10.9448 7.55803 10.9278C7.75693 10.9212 7.8298 10.8562 7.78648 10.6448C7.18516 7.69404 7.77991 4.91001 8.98648 2.21656C9.35541 1.39402 10.1123 1.13472 10.9165 1.55091C12.3823 2.31109 13.841 3.08571 15.3009 3.85836C15.7001 4.06974 15.6981 4.0763 15.9462 3.68571C16.7832 2.36951 17.8342 1.25485 19.0749 0.310863C19.5187 -0.0265559 19.95 -0.0902324 20.4784 0.124429C23.7614 1.45835 27.0509 2.77455 30.3417 4.08812C30.8176 4.27784 31.1249 4.59097 31.1288 5.10629C31.1327 5.61898 30.8386 5.94196 30.3627 6.14021C28.948 6.72971 27.8117 7.69732 26.8152 8.83759C26.399 9.31418 26.42 9.33453 26.9485 9.68048C29.1817 11.1431 31.4255 10.9822 33.6713 9.71725C34.0231 9.519 34.3599 9.29186 34.6894 9.05751C35.2198 8.68136 35.7608 8.61308 36.3522 8.91243C38.6938 10.0986 41.0413 11.2737 43.3822 12.4612C44.2205 12.8866 44.3906 13.784 43.7623 14.4864C43.4492 14.8363 43.1046 15.1593 42.7553 15.4737C42.5669 15.6431 42.5361 15.7219 42.7927 15.8538C43.4925 16.2142 44.1798 16.5995 44.8698 16.979C45.4396 17.2921 45.693 17.7956 45.5735 18.3615C45.4507 18.9438 45.0076 19.2976 44.3499 19.3632C41.8166 19.6179 39.2846 19.891 36.75 20.1293C35.5415 20.2429 34.3408 20.4044 33.1415 20.5842C32.894 20.621 32.64 20.6125 32.3885 20.6249L32.3892 20.6256ZM21.8649 17.7726C21.7152 17.5915 21.6259 17.4838 21.538 17.3761C21.448 17.2659 21.3548 17.1582 21.2708 17.044C19.2902 14.3656 18.8649 11.3151 19.1491 8.10105C19.1695 7.87129 19.1327 7.74196 18.9207 7.63037C16.1622 6.18025 13.4064 4.72488 10.6552 3.26098C10.4208 3.13626 10.3401 3.19599 10.2502 3.41591C9.55891 5.10497 9.16307 6.84524 9.20771 8.68464C9.30092 12.5223 11.8283 15.6234 15.5773 16.4564C16.4419 16.6481 17.3097 16.8221 18.1762 17.0033C19.373 17.2534 20.5697 17.5028 21.8655 17.7733L21.8649 17.7726ZM31.9809 18.9523C32.2113 18.9306 32.5152 18.8971 32.8205 18.8748C33.8597 18.7987 34.8745 18.6405 35.8474 18.2236C38.2074 17.212 40.1925 15.6739 42.0339 13.9212C42.2577 13.7079 42.1061 13.6507 41.9328 13.5628C40.0284 12.6043 38.1188 11.6558 36.2275 10.6724C35.8166 10.4584 35.5317 10.459 35.1391 10.7282C33.8111 11.6387 32.3492 12.2321 30.7238 12.3359C29.0741 12.4409 27.5695 11.9722 26.1693 11.1234C25.8561 10.9337 25.8417 10.9474 25.7675 11.3157C25.5804 12.244 25.6178 13.1636 25.8522 14.0774C26.5986 16.9869 29.1555 18.842 31.9815 18.9523H31.9809ZM26.8336 18.6707C26.6511 18.4803 26.5264 18.3438 26.3957 18.2138C23.7515 15.5814 23.2329 11.577 25.1596 8.38135C25.9251 7.11111 27.066 6.20126 28.285 5.38791C28.3697 5.33145 28.5207 5.30782 28.5036 5.17653C28.4898 5.07149 28.354 5.06427 28.266 5.02882C25.5883 3.95158 22.9086 2.87761 20.2323 1.79774C20.0491 1.72422 19.9126 1.73341 19.755 1.86207C18.788 2.64982 17.9734 3.56952 17.3045 4.62182C17.1909 4.80038 17.2296 4.87784 17.4062 4.96909C18.0476 5.29994 18.685 5.63802 19.3165 5.98725C19.7563 6.23014 20.2263 6.42183 20.6274 6.73036C20.9714 6.99492 21.0443 7.27719 20.9032 7.68485C20.8605 7.80827 20.8093 7.93365 20.7962 8.06166C20.5605 10.3514 20.7456 12.5879 21.7441 14.6965C22.7577 16.8372 24.4887 18.093 26.8343 18.6707H26.8336ZM2.69171 12.8321C2.77967 12.9089 2.82562 12.9529 2.87617 12.9923C6.17028 15.5446 9.46635 18.095 12.7559 20.6532C12.964 20.8147 13.1714 20.8692 13.4228 20.8416C14.1075 20.7667 14.7928 20.7004 15.4775 20.6309C17.5979 20.4162 19.7176 20.2022 21.838 19.9862C22.3559 19.9337 22.8738 19.8766 23.3918 19.8214C23.3124 19.7545 23.2323 19.7309 23.1509 19.7138C20.6892 19.2031 18.2287 18.6845 15.7644 18.1849C12.5012 17.5232 10.0145 15.8269 8.52171 12.7934C8.42521 12.5965 8.30114 12.5243 8.08648 12.5348C6.97312 12.5906 5.85715 12.6168 4.74511 12.693C4.08143 12.7383 3.4125 12.6969 2.69105 12.8315L2.69171 12.8321ZM42.8978 17.854L42.9102 17.7799C42.3936 17.4982 41.877 17.216 41.3603 16.9343C41.2809 16.891 41.1975 16.8588 41.1142 16.9199C40.5424 17.3394 39.9713 17.7602 39.3582 18.2105C40.5765 18.0877 41.7372 17.9709 42.8971 17.8534L42.8978 17.854Z"
                  fill="white"
                />
                <path
                  d="M12.0147 30.0773C11.6366 30.1088 11.3057 29.9795 10.9913 29.7852C10.5311 29.5016 10.1451 29.1294 9.75257 28.765C8.00311 27.1403 6.081 25.7237 4.22716 24.2263C3.29959 23.4773 2.43241 22.6554 1.47595 21.9418C1.17726 21.7193 0.87135 21.5151 0.522114 21.3707C0.0921347 21.1928 -0.0732927 20.751 0.0927911 20.3053C0.256249 19.8667 0.629774 19.6895 1.10242 19.8516C1.85275 20.1083 2.46589 20.5921 3.04882 21.1061C5.08515 22.9009 7.26656 24.5177 9.35935 26.2436C10.1694 26.9112 10.9985 27.5558 11.8145 28.2162C11.9281 28.3081 12.037 28.3265 12.1769 28.3094C12.5235 28.2674 12.8727 28.2129 13.22 28.2162C14.613 28.2287 15.9883 28.0167 17.3714 27.9064C18.6896 27.8013 20.0051 27.6648 21.322 27.5427C23.1174 27.376 24.9128 27.2086 26.7082 27.0431C28.2318 26.9027 29.7555 26.7641 31.2791 26.6237C32.8356 26.4805 34.3914 26.3355 35.9479 26.1917C37.4715 26.0512 38.9951 25.9121 40.5188 25.7709C41.6072 25.6705 42.6949 25.5674 43.7827 25.467C43.9133 25.4552 44.0446 25.444 44.1752 25.4407C44.659 25.4282 44.9328 25.6186 44.9991 26.0086C45.0805 26.4858 44.835 26.9046 44.3938 27.0385C44.0761 27.135 43.7433 27.1199 43.4177 27.1514C41.873 27.3024 40.3271 27.4337 38.7818 27.5762C37.008 27.7396 35.2349 27.909 33.4612 28.0731C31.927 28.2149 30.3916 28.3508 28.8575 28.4926C27.3122 28.635 25.7675 28.7821 24.2222 28.9252C22.6986 29.0663 21.1749 29.2035 19.6513 29.3447C17.8664 29.5101 16.0821 29.6749 14.2979 29.8442C13.5364 29.9164 12.7769 29.9998 12.016 30.0786L12.0147 30.0773Z"
                  fill="white"
                />
                <path
                  d="M12.0121 26.1871C11.4863 26.1851 11.0891 25.9613 10.7123 25.6882C10.1077 25.2497 9.62587 24.672 9.05016 24.2026C7.2449 22.7309 5.42388 21.2781 3.61469 19.8103C3.00352 19.314 2.41403 18.7915 1.80746 18.2893C1.41161 17.961 0.998046 17.6624 0.516206 17.4589C0.0691586 17.2698 -0.0857654 16.8076 0.101982 16.3593C0.280538 15.9332 0.652749 15.7809 1.13065 15.9529C1.89739 16.2286 2.51906 16.7315 3.12037 17.2599C5.06808 18.972 7.15037 20.5193 9.15191 22.1657C10.0217 22.8812 10.9073 23.5777 11.7843 24.2834C11.8788 24.3595 11.9635 24.4377 12.104 24.4068C12.9023 24.2335 13.7169 24.3523 14.523 24.2663C16.3047 24.0759 18.0909 23.9256 19.8751 23.7608C21.3981 23.6197 22.9218 23.4812 24.4454 23.3407C26.2513 23.174 28.0579 23.0053 29.8638 22.8392C31.3979 22.698 32.9327 22.5602 34.4669 22.4184C36.2511 22.2536 38.0354 22.0869 39.8196 21.9214C41.2888 21.7849 42.7566 21.6438 44.2264 21.5151C44.6623 21.477 44.9682 21.7534 45.005 22.1794C45.049 22.6895 44.747 23.0952 44.2468 23.1582C43.7485 23.2212 43.2463 23.256 42.7461 23.3026C40.9402 23.4707 39.1343 23.6394 37.3277 23.8055C35.7824 23.9473 34.2371 24.0838 32.6918 24.2263C31.1577 24.3674 29.6242 24.5145 28.0901 24.6569C26.5671 24.798 25.0434 24.9366 23.5198 25.0764C22.0073 25.2149 20.4948 25.3534 18.983 25.4939C17.6668 25.616 16.3506 25.742 15.0338 25.8615C14.1088 25.9455 13.1826 26.0164 12.2642 26.1595C12.167 26.1746 12.0692 26.1819 12.0114 26.1884L12.0121 26.1871Z"
                  fill="white"
                />
                <path
                  d="M12.1066 33.999C11.4974 34.0173 11.1141 33.7902 10.7425 33.5289C10.1491 33.1108 9.68495 32.5462 9.12631 32.0906C7.33024 30.6248 5.51841 29.1779 3.71841 27.7167C2.97989 27.1173 2.26041 26.4943 1.52518 25.8911C1.22912 25.6482 0.906142 25.4453 0.549686 25.293C0.0803185 25.0921 -0.0897041 24.6438 0.101325 24.181C0.278569 23.7517 0.667848 23.6007 1.1615 23.7832C1.99061 24.0891 2.64969 24.6543 3.29434 25.2293C4.75692 26.5337 6.33308 27.697 7.84949 28.9357C9.16175 30.0077 10.4885 31.0633 11.8066 32.1287C11.8946 32.1996 11.9707 32.2607 12.0981 32.2318C12.9279 32.0467 13.7767 32.1734 14.6149 32.0801C16.1675 31.9075 17.7259 31.7828 19.2817 31.639C20.8053 31.4985 22.329 31.3593 23.852 31.2189C25.4189 31.0738 26.9852 30.9274 28.5522 30.783C30.0647 30.6431 31.5772 30.5059 33.0896 30.3661C34.6671 30.2204 36.2446 30.072 37.8227 29.9263C39.324 29.7878 40.826 29.6506 42.328 29.5134C42.905 29.4609 43.4827 29.4175 44.0584 29.3578C44.6085 29.3 44.9479 29.5108 45.0043 29.9644C45.0706 30.5007 44.7529 30.9182 44.2205 30.9812C43.8188 31.0285 43.4164 31.0672 43.014 31.1033C40.761 31.3081 38.508 31.5064 36.2557 31.7151C33.2964 31.9889 30.3378 32.2738 27.3785 32.5469C24.6476 32.799 21.9154 33.0399 19.1839 33.2913C17.1489 33.479 15.1152 33.6734 13.0815 33.8703C12.7119 33.9057 12.3456 33.9668 12.1073 33.999H12.1066Z"
                  fill="white"
                />
              </svg>
            </MethodWasCreateSectionText>
            <MethodWasCreateSectionText text="Deseja ter paz e segurança nessa reta final para revisar os conteúdos mais relevantes.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="34"
                viewBox="0 0 30 34"
                fill="none"
              >
                <path
                  d="M29.1332 7.64932V10.4925C29.1259 10.5494 29.1145 10.6064 29.1124 10.6633C29.062 11.91 28.9434 13.15 28.7688 14.3853C28.4391 16.7193 27.9014 19.0024 27.0848 21.2156C26.047 24.0283 24.6133 26.6095 22.5857 28.837C20.4283 31.2071 17.835 32.9244 14.8162 34H14.2963C14.2484 33.9802 14.2008 33.959 14.1522 33.941C10.2522 32.4843 7.13826 30.0264 4.79414 26.589C3.18582 24.2306 2.0797 21.6436 1.31649 18.9028C0.619919 16.4011 0.218357 13.8511 0.0659932 11.2596C-0.0103625 9.96047 -0.02251 8.66207 0.0403099 7.36264C0.0729346 6.68654 0.508162 6.20446 1.1669 6.11665C3.23232 5.84177 5.23423 5.32186 7.16325 4.53262C9.60767 3.53271 11.8466 2.20724 13.742 0.341042C14.2119 -0.121604 14.938 -0.108068 15.4176 0.34833C15.5974 0.519783 15.7706 0.698525 15.9566 0.863037C18.274 2.90902 20.959 4.28655 23.8907 5.2108C25.2318 5.63353 26.602 5.9275 27.9948 6.11908C28.6612 6.21071 29.0846 6.69939 29.1096 7.37409C29.1131 7.46572 29.1252 7.55734 29.1335 7.64897L29.1332 7.64932ZM2.45315 9.66129C2.48959 10.5727 2.53089 11.4834 2.61697 12.3924C2.7728 14.0389 3.03345 15.6674 3.42495 17.2739C3.97575 19.5351 4.75909 21.7078 5.90304 23.7413C7.87023 27.2377 10.6541 29.8275 14.3813 31.3685C14.5066 31.4202 14.617 31.4324 14.7457 31.3789C17.4508 30.2617 19.722 28.5669 21.5452 26.2759C23.1698 24.2341 24.2985 21.9306 25.1006 19.4605C26.2438 15.9402 26.7158 12.3192 26.6981 8.62598C26.6975 8.46737 26.6326 8.41461 26.492 8.39101C25.7343 8.26398 24.985 8.09773 24.243 7.89886C20.7195 6.95483 17.5042 5.40377 14.7006 3.04507C14.6083 2.96733 14.5486 2.96004 14.4517 3.0416C12.0899 5.03553 9.40776 6.45019 6.48646 7.42789C5.23631 7.84611 3.96083 8.16819 2.66104 8.39066C2.5118 8.41635 2.44308 8.47361 2.44898 8.63812C2.46113 8.9786 2.45245 9.31977 2.45315 9.6606V9.66129Z"
                  fill="white"
                />
                <path
                  d="M13.9009 21.8796C13.3349 21.8681 12.8188 21.629 12.4033 21.1955C11.9716 20.745 11.5266 20.308 11.0872 19.8655C10.3056 19.0787 9.51466 18.3009 8.73652 17.5107C8.07501 16.8387 8.33913 15.7444 9.2252 15.4667C9.7052 15.3165 10.1279 15.4359 10.4837 15.7829C10.8762 16.1661 11.2611 16.5576 11.6491 16.9456C12.3926 17.689 13.1388 18.4297 13.8766 19.1787C14.0006 19.3047 14.0689 19.3008 14.1925 19.1769C16.1083 17.2531 18.03 15.3352 19.9476 13.4135C20.285 13.0751 20.6737 12.9057 21.1533 13.0091C22.0148 13.1952 22.4049 14.1996 21.8954 14.9184C21.8322 15.0072 21.7562 15.0884 21.6788 15.1655C19.8112 17.023 17.9506 18.8878 16.0622 20.7242C15.739 21.0386 15.4114 21.3486 15.0164 21.5745C14.6846 21.7644 14.3303 21.8747 13.9009 21.8792V21.8796Z"
                  fill="white"
                />
              </svg>
            </MethodWasCreateSectionText>
            <MethodWasCreateSectionText text="Busca uma revisão baseada em questões para aprofundar o conteúdo e reter o aprendizado.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="35"
                viewBox="0 0 34 35"
                fill="none"
              >
                <path
                  d="M0.552629 34.0031C-0.0378179 33.6473 -0.142875 33.2603 0.178945 32.6433C1.73153 29.6631 3.28544 26.683 4.83404 23.7002C4.98364 23.4116 5.16849 23.1596 5.39855 22.9295C11.2884 17.0437 17.1756 11.1558 23.0634 5.26796C23.2855 5.04588 23.2888 4.82668 23.0734 4.61036C22.8779 4.41487 22.6784 4.22338 22.4883 4.02257C22.3726 3.90089 22.2708 3.88892 22.1565 4.01858C22.098 4.08507 22.0315 4.14425 21.969 4.20675C19.1537 7.02135 16.3391 9.83661 13.5232 12.6505C13.4062 12.7669 13.2871 12.8873 13.1495 12.9757C12.815 13.1911 12.4261 13.1426 12.1455 12.87C11.8556 12.5887 11.801 12.1858 12.0211 11.8413C12.0976 11.7217 12.2007 11.6179 12.3017 11.5169C15.3889 8.42699 18.4775 5.33844 21.566 2.2499C22.1119 1.704 22.5229 1.704 23.0694 2.2479C23.4458 2.62225 23.8188 2.99993 24.1964 3.37295C24.6419 3.81312 24.5249 3.79982 24.9684 3.36164C25.5981 2.74061 26.2038 2.09364 26.8521 1.49256C27.8761 0.541725 29.069 -0.0188008 30.5012 0.000481835C32.1708 0.023754 33.4933 1.04241 33.9202 2.65816C33.9455 2.75391 33.9734 2.84966 34 2.9454V4.27258C33.742 5.69284 32.9933 6.82121 31.9467 7.78468C31.4507 8.24081 30.9946 8.74016 30.5092 9.2096C30.3536 9.35987 30.3024 9.47955 30.4114 9.69366C30.5743 10.0141 30.4926 10.3679 30.2379 10.6039C29.9719 10.8506 29.6561 10.947 29.325 10.7668C29.1062 10.6478 28.9898 10.7289 28.8442 10.8759C28.0197 11.709 27.1886 12.5362 26.3594 13.3653C21.2841 18.4407 16.2081 23.5153 11.1355 28.5939C10.8735 28.8559 10.5856 29.0634 10.2578 29.2343C7.2949 30.7736 4.33535 32.3201 1.3758 33.8654C1.298 33.906 1.22553 33.9572 1.15039 34.0037H0.553294L0.552629 34.0031ZM27.8535 9.47091C27.8342 9.34258 27.7464 9.2854 27.678 9.21625C26.7251 8.26142 25.767 7.31192 24.8208 6.35045C24.6433 6.17026 24.5342 6.14964 24.3427 6.34114C19.2581 11.4357 14.1688 16.5257 9.07488 21.611C8.89668 21.7885 8.90134 21.8883 9.07621 22.0605C10.0217 22.9913 10.9559 23.9335 11.8941 24.8711C12.0936 25.0705 12.2962 25.0674 12.5019 24.8618C17.5287 19.835 22.5561 14.8082 27.5829 9.78143C27.6454 9.71892 27.7099 9.65775 27.7684 9.59192C27.8036 9.55203 27.8302 9.50415 27.8528 9.47091H27.8535ZM2.85258 31.1339C2.96695 31.1712 3.01748 31.1206 3.07267 31.0914C4.97367 30.1013 6.86071 29.082 8.78165 28.1332C9.59817 27.7296 10.2365 27.1497 10.8529 26.5148C10.9699 26.3944 10.9839 26.3146 10.8575 26.1896C9.84552 25.1856 8.83884 24.1756 7.83082 23.1676C7.761 23.0977 7.6852 23.002 7.5848 23.1144C7.15128 23.5964 6.59009 23.9628 6.27957 24.5566C5.36331 26.3093 4.44705 28.062 3.53213 29.8154C3.30406 30.2516 3.08131 30.6904 2.85258 31.1346V31.1339ZM30.4114 1.66278C29.6315 1.68339 28.9307 1.93805 28.3322 2.42876C27.4579 3.14488 26.7205 4.00462 25.906 4.78457C25.7457 4.93816 25.8521 5.03125 25.9585 5.13764C26.9359 6.1144 27.916 7.08984 28.8881 8.07259C29.0384 8.22419 29.1394 8.23416 29.2937 8.07724C29.9593 7.39769 30.6442 6.73743 31.3031 6.05257C31.8769 5.4568 32.2346 4.75199 32.351 3.91818C32.5265 2.65683 31.6728 1.64748 30.4114 1.66411V1.66278Z"
                  fill="white"
                />
              </svg>
            </MethodWasCreateSectionText>
            <div className="large__buttom__header mt-12 flex h-12 w-80 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-400 text-sm font-semibold leading-normal text-white">
              O MÉTODO FOI FEITO PRA MIM
            </div>
          </div>
          <div className="relative flex  flex-1 items-center max-lg:hidden">
            <div className="light__blur absolute right-[64px] top-[184px] " />
            <div className="absolute right-0 top-[66px] h-48 w-48 rounded-full bg-gradient-to-b from-purple-600 to-blue-400" />
            <Image
              className="animate__image absolute right-0 top-[238px]  ml-28 flex-shrink-0  -translate-y-1/4 "
              src="/images/main/astronaut.png"
              width={312}
              height={428}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
