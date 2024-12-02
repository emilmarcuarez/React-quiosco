import useQuiosco from "../hooks/useQuiosco"

export default function ModalProducto() {

const { producto } = useQuiosco();

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">

        </div>
        <div className="md:w-1/3">

        </div>
    </div>
  )
}
