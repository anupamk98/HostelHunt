import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import Footer from "../components/Footer";
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div
        className="flex flex-col p-28 px-3 max-w-6xl mx-auto gap-7 mt-20"
        style={{ width: "100%" }}
      >
        <h1
          className="text-3xl lg:text-6xl"
          style={{ color: "#116633", fontWeight: "900" }}
        >
          Navigate Your{" "}
          <span style={{ color: "#000000", fontWeight: "900" }}>
            Perfect Stay
          </span>
          <br />
          with{" "}
          <span
            style={{
              background:
                "linear-gradient(to right, #116633, #110033,#116633, #110033)",
              webkitTextFillColor: "transparent",
              webkitBackgroundClip: "text",
            }}
          >
            HostelHunt
          </span>
        </h1>
        <div className="text-xs sm:text-sm" style={{ color: "#000000" }}>
          HostelHunt simplifies the process of finding your ideal college stay.
          <br />
          Explore, compare and choose the perfect hostel room to match your
          lifestyle and needs.
        </div>
        <Link
          to={"/search"}
          style={{
            color: "#ffffff",
            border: "1px solid #116633",
            borderRadius: "3rem",
            width: "10rem",
            padding: "0.1rem 0.2rem",
            textAlign: "center",
            backgroundColor: "#116633",
          }}
        >
          Lets get started...
        </Link>
      </div>

      {/* swiper */}
      <div>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <div
              style={{
                background: `url(${listing.imageUrls[0]}) center no-repeat`,
                backgroundSize: "cover",
              }}
              className="h-[500px]"
              key={listing._id}
            ></div>
          ))}
      </div>

      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
