import { Map, Marker } from "pigeon-maps"

export const Mapa = () => {
  return (
    <Map height={400} defaultCenter={[-34.61107807909652, -58.43108448226675]} defaultZoom={15}>
      <Marker width={50} anchor={[-34.61107807909652, -58.43108448226675]} />
    </Map>
  )
}

