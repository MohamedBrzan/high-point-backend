const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const I18n = require('./I18n/I18n');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./controllers/Passport/PassportSetup');
const ErrorMessage = require('./middleWare/ErrorMessage');
const ClientMessageRoutes = require('./routes/ClientMessageRoutes');
const UserRoutes = require('./routes/UserRoutes');
const ServicesRoutes = require('./routes/ServicesRoutes');
const ServicesCardsRoutes = require('./routes/ServicesCardsRoutes');
const ServicesTabsRoutes = require('./routes/ServicesTabsRoutes');
const InterfaceRoutes = require('./routes/InterfaceRoutes');
const ServicesSolutionsRoutes = require('./routes/ServicesSolutionsRoutes');
const SolutionsRoutes = require('./routes/SolutionsRoutes');
const SolutionsCardsRoutes = require('./routes/SolutionsCardsRoutes');
const SolutionsTabsRoutes = require('./routes/SolutionsTabsRoutes');
const SolutionsSolutionsRoutes = require('./routes/SolutionsSolutionsRoutes');
const ContactUsRoutes = require('./routes/ContactUsRoutes');
const PartnerRoutes = require('./routes/PartnerRoutes');
const BlogRoutes = require('./routes/BlogRoutes');
const RequestRoutes = require('./routes/RequestRoutes');
const NewsRoomRoutes = require('./routes/NewsRoomRoutes');
const DocumentationRoutes = require('./routes/DocumentationRoutes');
const ProductRoutes = require('./routes/ProductRoutes');
const AboutRoutes = require('./routes/AboutRoutes');
const QuoteRoutes = require('./routes/QuoteRoutes');
const CareerRoutes = require('./routes/CareerRoutes');
const ApplyJobRoutes = require('./routes/ApplyJobRoutes');
const GoogleAuthRoutes = require('./routes/GoogleAuthRoutes');

dotenv.config({ path: 'config/.env' });

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://high-point-backend.onrender.com/',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD'],
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: 'session',
    keys: ['high_point'],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(morgan('dev'));
app.use(I18n);
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json({ limit: 16777216 }));
app.use(express.urlencoded({ extended: true, limit: 16777216 }));
app.use(cookieParser());

app.use('/api/v1/interface', InterfaceRoutes);

app.use('/api/v1/client_messages', ClientMessageRoutes);

app.use('/api/v1/services/cards', ServicesCardsRoutes);

app.use('/api/v1/services/solutions', ServicesSolutionsRoutes);

app.use('/api/v1/services/tabs', ServicesTabsRoutes);

app.use('/api/v1/services', ServicesRoutes);

app.use('/api/v1/solutions/solutions', SolutionsSolutionsRoutes);

app.use('/api/v1/solutions/tabs', SolutionsTabsRoutes);

app.use('/api/v1/solutions/cards', SolutionsCardsRoutes);

app.use('/api/v1/solutions', SolutionsRoutes);

app.use('/api/v1/contact_us', ContactUsRoutes);

app.use('/api/v1/partner', PartnerRoutes);

app.use('/api/v1/blog', BlogRoutes);

app.use('/api/v1/request', RequestRoutes);

app.use('/api/v1/news_room', NewsRoomRoutes);

app.use('/api/v1/documentation', DocumentationRoutes);

app.use('/api/v1/products', ProductRoutes);

app.use('/api/v1/about', AboutRoutes);

app.use('/api/v1/quote', QuoteRoutes);

app.use('/api/v1/career', CareerRoutes);

app.use('/api/v1/apply_job', ApplyJobRoutes);

app.use('/api/v1/auth', GoogleAuthRoutes);

app.use('/api/v1', UserRoutes);

app.use(ErrorMessage);

module.exports = app;
