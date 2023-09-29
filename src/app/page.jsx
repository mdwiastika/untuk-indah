"use client";
import Image from "next/image";
import Swal from "sweetalert2";
function handleSuccess() {
  Swal.fire({
    title: "Hehehe!",
    text: "Yeee Diterima",
    icon: "success",
    confirmButtonText: "Lanjut",
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: "Salting dikit!",
        html: "<div><img src='/assets/giff.gif' /></div>",
        confirmButtonText: "Lanjut",
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: "Aku sayangg kamu!",
            html: "<div><img src='/assets/giff2.gif' /></div>",
            confirmButtonText: "Lanjut",
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                title: "Kasih Tau Marcel!",
                // html: "<div><img src='/assets/giff2.gif' /></div>",
                confirmButtonText: "Kasih Tau!",
              }).then((result) => {
                if (result.value) {
                  window.location.href = "https://wa.me/62895339390753?text=Aku Sayang Kamu!";
                }
              });
            }
          });
        }
      });
    }
  });
}
function handleGagal(e) {
  e.target.classList.add("hidden");
  e.target.parentElement.nextElementSibling.classList.add("opacity-100");
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-50/30">
      <p className="text-[40px] text-emerald-950 font-extrabold">
        Haii <span className="text-sky-600">Indah</span>
      </p>
      <p className="text-[20px]">
        Mau ga jadi <span className="text-sky-600 font-bold">pacarku</span>?
      </p>
      <div className="flex justify-center w-[400px] gap-2 mt-5 relative">
        <button className="btn-pilihan btn-terima text-green-600 font-bold" onClick={handleSuccess}>
          Mau
        </button>
        <button className="btn-pilihan text-red-700 font-bold btn-gagal" onClick={handleGagal}>
          Ga
        </button>
      </div>
      <div className="flex justify-center text-white mt-3 opacity-0">
        <svg xmlns="http://www.w3.org/2000/svg" height="2em" className="animate-bounce" style={{ fill: "#00ff33" }} viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </div>
    </main>
  );
}
