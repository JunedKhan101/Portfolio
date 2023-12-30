import "../css/fallback.css";

export default function FallBack() {
	return (
		<div className="fallback w-100 h-100 d-flex align-items-center justify-content-center">
            <img
                id="loading-fallback"
                src="/static/loading.webp"
                alt="loading"
            />
            {/* <h5>Loading...</h5> */}
        </div>
	);
}
