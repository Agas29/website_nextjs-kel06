import Image from "next/image";
interface PromoCardProps {
    image: string;
    title: string;
    periode: string;
}

export default function PromoCard({ image, title, periode }: PromoCardProps) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <Image 
        src={image}
        alt={title}
        width={300}
        height={200}
        className="card-img-top"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      
      <div className="card-body">
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <small className="text-muted"> {periode}</small>
      </div>
    </div>
  );
}