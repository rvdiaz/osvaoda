import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { CheckCircleOutlineOutlined } from '@mui/icons-material';

export const getIconByName=(name,color,styles)=>{
    switch (name) {
        case 'instagram':
        return <InstagramIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'facebook':
            return <FacebookOutlinedIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'twitter':
            return <TwitterIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'email':
            return <EmailIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'phone':
            return <LocalPhoneIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'linkedin':
            return <LinkedInIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'whatsapp':
            return <WhatsAppIcon fontSize="small" color={color ? color : 'dark'} sx={styles}/>    
        case 'tiktok':
            return (
                <svg
                  fill={color ? color : '#4f4e4e'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="19px"
                  height="19px"
                  style={styles}
                >
                  <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                </svg>
              );
        case 'truck':
            return <LocalShippingOutlinedIcon fontSize="large" color={color ? color : 'dark'} sx={styles}/>    
        case 'quality':
            return <CheckCircleOutlineOutlined fontSize="large" color={color ? color : 'dark'} sx={styles}/>    
        case 'watch':
            return <WatchLaterOutlinedIcon fontSize="large" color={color ? color : 'dark'} sx={styles}/>    
        default:
            return <LinkIcon fontSize="small" color={color ? color : 'dark'} sx={styles.styles}/>    
    }
}