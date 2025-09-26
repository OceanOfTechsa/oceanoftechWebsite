interface GeoLocationData {
    query: string;       // IP address
    city: string;
    country: string;
    countryCode: string;
    regionName: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    status: 'success' | 'fail';
    message?: string;
}


export const getUserGeoData = async (): Promise<GeoLocationData> => {
    try {
        const response = await fetch('http://ip-api.com/json/?fields=status,message,query,city,country,countryCode,regionName,lat,lon,timezone,isp,org,as');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GeoLocationData = await response.json();

        if (data.status === 'fail') {
            throw new Error(data.message || 'Failed to fetch location data');
        }

        return data;
    } catch (error) {
        throw new Error(`Failed to get geolocation data: ${error instanceof Error ? error.message : String(error)}`);
    }
};