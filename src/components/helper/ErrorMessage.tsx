import imgSrc from "@/assets/img-pikachu-sad-min.png";

export const ErrorMessage = () => {
  return (
    <div className="flex pt-48 p-12 justify-center items-center text-center">
      <div className="text-center flex justify-center flex-col items-center">
        <img src={imgSrc} width="32" height="32" alt="Pikachu" />
        <span className="text-white mt-3">Oops, pokémon not found</span>
      </div>
    </div>
  );
};
