import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './LegalPages.css';

export default function LegalPages({ currentLang }) {
  const location = useLocation();
  const isPl = currentLang === 'pl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isPrivacy = location.pathname.includes('polityka') || location.pathname.includes('privacy');

  return (
    <div className="legal-page-container">
      <div className="legal-page-inner">
        {isPrivacy ? (
          <div className="legal-document-content">
            <h1 className="legal-page-title">
              {isPl ? 'POLITYKA PRYWATNOŚCI' : 'PRIVACY POLICY'}
            </h1>
            <p className="legal-subtitle-info">
              {isPl 
                ? 'obowiązująca na stronie internetowej juliakocur.arts.pl' 
                : 'applicable on the juliakocur.arts.pl website'}
            </p>

            <h2>{isPl ? '§1. Postanowienia ogólne' : '§1. General Provisions'}</h2>
            <p>
              {isPl 
                ? 'Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies i podobnych technologii w związku z korzystaniem ze strony internetowej juliakocur.arts.pl.' 
                : 'This Privacy Policy sets out the rules for the processing of personal data and the use of cookies and similar technologies in connection with the use of the juliakocur.arts.pl website.'}
            </p>
            <p><strong>{isPl ? 'Administratorem danych osobowych jest:' : 'The administrator of personal data is:'}</strong></p>
            <p>
              Julia Kocur<br />
              ul. Kaliska 6a/18<br />
              99-400 Łowicz<br />
              e-mail: juliakocur.arts@gmail.com<br />
              telefon: +48 729 845 609<br />
              {isPl ? 'dalej zwana „Administratorem”.' : 'hereinafter referred to as the "Administrator".'}
            </p>
            <p>
              {isPl 
                ? 'Administrator przetwarza dane osobowe zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).' 
                : 'The Administrator processes personal data in accordance with applicable legal provisions, in particular Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR).'}
            </p>

            <h2>{isPl ? '§2. Jakie dane mogą być przetwarzane' : '§2. What data may be processed'}</h2>
            <p>
              {isPl 
                ? 'W zależności od sposobu korzystania ze strony Administrator może przetwarzać w szczególności:' 
                : 'Depending on how you use the website, the Administrator may process in particular:'}
            </p>
            <ul>
              <li>{isPl ? 'a) imię i nazwisko,' : 'a) name and surname,'}</li>
              <li>{isPl ? 'b) adres e-mail,' : 'b) e-mail address,'}</li>
              <li>{isPl ? 'c) numer telefonu – jeżeli zostanie podany przez użytkownika,' : 'c) telephone number – if provided by the user,'}</li>
              <li>{isPl ? 'd) dane dotyczące zamówienia lub zapytania,' : 'd) data regarding the order or inquiry,'}</li>
              <li>{isPl ? 'e) treść wiadomości przesłanej za pośrednictwem formularza kontaktowego lub poczty elektronicznej,' : 'e) the content of the message sent via the contact form or e-mail,'}</li>
              <li>{isPl ? 'f) dane potrzebne do realizacji zamówienia i dostawy Produktu,' : 'f) data necessary to process the order and deliver the Product,'}</li>
              <li>{isPl ? 'g) adres IP oraz dane techniczne dotyczące korzystania ze strony,' : 'g) IP address and technical data regarding website usage,'}</li>
              <li>{isPl ? 'h) informacje związane z udzielonymi zgodami lub zaznaczonymi polami wyboru w formularzu kontaktowym.' : 'h) information related to consents given or checkboxes selected in the contact form.'}</li>
            </ul>
            <p className="legal-comment">
              {isPl 
                ? '[Uwaga techniczna: Po podłączeniu Formspree upewnij się, które pola są realnie zbierane i dostosuj ten punkt, jeśli np. zbierasz tylko imię, e-mail i wiadomość]' 
                : '[Technical note: After connecting Formspree, make sure which fields are actually collected and adjust if necessary]'}
            </p>
            <p>
              {isPl 
                ? 'Podanie danych osobowych jest dobrowolne, jednak może być niezbędne do udzielenia odpowiedzi na wiadomość, przygotowania oferty, zawarcia lub wykonania umowy albo realizacji zamówienia.' 
                : 'Providing personal data is voluntary, but may be necessary to respond to a message, prepare an offer, conclude or perform a contract, or fulfill an order.'}
            </p>

            <h2>{isPl ? '§3. Cele i podstawy prawne przetwarzania danych' : '§3. Purposes and legal grounds for data processing'}</h2>
            <p>{isPl ? 'Dane osobowe mogą być przetwarzane w celu:' : 'Personal data may be processed for the purpose of:'}</p>
            <ul>
              <li>{isPl ? 'a) udzielenia odpowiedzi na wiadomość przesłaną przez użytkownika,' : 'a) responding to a message sent by the user,'}</li>
              <li>{isPl ? 'b) przygotowania oferty lub ustalenia szczegółów zamówienia,' : 'b) preparing an offer or determining order details,'}</li>
              <li>{isPl ? 'c) zawarcia i wykonania umowy sprzedaży,' : 'c) concluding and performing a sales contract,'}</li>
              <li>{isPl ? 'd) realizacji dostawy lub odbioru Produktu,' : 'd) delivery or collection of the Product,'}</li>
              <li>{isPl ? 'e) rozpatrywania reklamacji i obsługi spraw związanych z realizacją umowy,' : 'e) handling complaints and matters related to the performance of the contract,'}</li>
              <li>{isPl ? 'f) realizacji obowiązków prawnych ciążących na Administratorze,' : 'f) fulfillment of legal obligations incumbent on the Administrator,'}</li>
              <li>{isPl ? 'g) ustalenia, dochodzenia lub obrony przed roszczeniami,' : 'g) establishment, exercise, or defense of claims,'}</li>
              <li>{isPl ? 'h) zapewnienia bezpieczeństwa i prawidłowego działania strony internetowej.' : 'h) ensuring the security and proper operation of the website.'}</li>
            </ul>
            <p>{isPl ? 'Podstawą prawną przetwarzania danych może być w szczególności:' : 'The legal basis for data processing may be in particular:'}</p>
            <ul>
              <li>{isPl ? 'a) art. 6 ust. 1 lit. b RODO – gdy przetwarzanie jest niezbędne do zawarcia lub wykonania umowy albo podjęcia działań na żądanie osoby przed zawarciem umowy,' : 'a) Article 6(1)(b) GDPR – when processing is necessary for the performance of a contract or taking steps prior to entering into a contract,'}</li>
              <li>{isPl ? 'b) art. 6 ust. 1 lit. c RODO – gdy przetwarzanie jest niezbędne do wykonania obowiązku prawnego,' : 'b) Article 6(1)(c) GDPR – when processing is necessary for compliance with a legal obligation,'}</li>
              <li>{isPl ? 'c) art. 6 ust. 1 lit. f RODO – gdy przetwarzanie jest niezbędne do realizacji prawnie uzasadnionego interesu Administratora,' : 'c) Article 6(1)(f) GDPR – when processing is necessary for the purposes of the legitimate interests pursued by the Administrator,'}</li>
              <li>{isPl ? 'd) art. 6 ust. 1 lit. a RODO – w przypadkach, w których przetwarzanie odbywa się na podstawie zgody użytkownika.' : 'd) Article 6(1)(a) GDPR – in cases where processing is based on the user\'s consent.'}</li>
            </ul>

            <h2>{isPl ? '§4. Formularz kontaktowy' : '§4. Contact form'}</h2>
            <p>
              {isPl 
                ? 'Strona internetowa może umożliwiać kontakt z Administratorem za pośrednictwem formularza kontaktowego.' 
                : 'The website may allow contacting the Administrator via a contact form.'}
            </p>
            <p>
              {isPl 
                ? 'Dane podane w formularzu są przetwarzane w celu udzielenia odpowiedzi na wiadomość, prowadzenia korespondencji oraz – jeżeli użytkownik jest zainteresowany zakupem – przygotowania i realizacji zamówienia.' 
                : 'Data provided in the form is processed to respond to the message, conduct correspondence, and – if the user is interested in purchasing – to prepare and execute the order.'}
            </p>
            <p>
              {isPl 
                ? 'Formularz może wymagać podania danych niezbędnych do obsługi wiadomości, w szczególności adresu e-mail oraz treści wiadomości.' 
                : 'The form may require providing data necessary to handle the message, in particular the e-mail address and the content of the message.'}
            </p>
            <p>
              {isPl 
                ? 'Jeżeli formularz zawiera pole wyboru dotyczące zapoznania się z Polityką Prywatności, jego zaznaczenie może być rejestrowane wraz z informacją techniczną dotyczącą przesłania formularza.' 
                : 'If the form contains a checkbox regarding reading the Privacy Policy, its selection may be logged along with technical information regarding submitting the form.'}
            </p>

            <h2>{isPl ? '§5. Kontakt za pośrednictwem poczty elektronicznej i Instagram' : '§5. Contact via e-mail and Instagram'}</h2>
            <p>
              {isPl 
                ? 'Użytkownik może skontaktować się z Administratorem za pośrednictwem poczty elektronicznej pod adresem: juliakocur.arts@gmail.com.' 
                : 'The user can contact the Administrator via e-mail at: juliakocur.arts@gmail.com.'}
            </p>
            <p>
              {isPl 
                ? 'Dane zawarte w korespondencji e-mail są przetwarzane w celu prowadzenia korespondencji, udzielenia odpowiedzi, przygotowania oferty oraz – w razie zawarcia umowy – jej realizacji.' 
                : 'Data contained in e-mail correspondence is processed to conduct correspondence, provide a response, prepare an offer, and – in the event of concluding a contract – execute it.'}
            </p>
            <p>
              {isPl 
                ? 'Kontakt z Administratorem może być również możliwy za pośrednictwem profilu Instagram @julia_kocur_arts.' 
                : 'Contact with the Administrator may also be possible via the Instagram profile @julia_kocur_arts.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku kontaktu za pośrednictwem Instagrama przetwarzanie danych odbywa się również zgodnie z zasadami określonymi przez operatora tego serwisu.' 
                : 'In the case of contact via Instagram, data processing is also carried out in accordance with the rules set by the operator of this service.'}
            </p>

            <h2>{isPl ? '§6. Odbiorcy danych osobowych' : '§6. Recipients of personal data'}</h2>
            <p>
              {isPl 
                ? 'Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem wyłącznie w zakresie niezbędnym do realizacji określonych celów.' 
                : 'Personal data may be transferred to entities cooperating with the Administrator only to the extent necessary to achieve specific purposes.'}
            </p>
            <p>{isPl ? 'Odbiorcami danych mogą być w szczególności:' : 'Recipients of the data may be in particular:'}</p>
            <ul>
              <li>{isPl ? 'a) GitHub Pages (dostawca hostingu strony internetowej),' : 'a) GitHub Pages (website hosting provider),'}</li>
              <li>{isPl ? 'b) Formspree (dostawca usługi obsługującej formularz kontaktowy),' : 'b) Formspree (contact form service provider),'}</li>
              <li>{isPl ? 'c) dostawca poczty elektronicznej,' : 'c) e-mail provider,'}</li>
              <li>{isPl ? 'd) operator bankowy lub bank – w zakresie związanym z płatnością,' : 'd) banking operator or bank – in connection with payment,'}</li>
              <li>{isPl ? 'e) firmy kurierskie i operatorzy pocztowi – w zakresie niezbędnym do realizacji dostawy,' : 'e) courier companies and postal operators – necessary for delivery,'}</li>
              <li>{isPl ? 'f) podmioty świadczące usługi techniczne, informatyczne lub hostingowe, jeżeli jest to niezbędne do prawidłowego działania strony.' : 'f) technical, IT, or hosting service providers, if necessary for the proper functioning of the website.'}</li>
            </ul>

            <h2>{isPl ? '§7. Hosting i infrastruktura techniczna' : '§7. Hosting and technical infrastructure'}</h2>
            <p>
              {isPl 
                ? 'Strona internetowa jest utrzymywana z wykorzystaniem zewnętrznej usługi hostingowej (GitHub Pages).' 
                : 'The website is maintained using an external hosting service (GitHub Pages).'}
            </p>
            <p>
              {isPl 
                ? 'Dostawca infrastruktury technicznej może przetwarzać dane techniczne związane z korzystaniem ze strony, w szczególności adres IP, informacje o urządzeniu, przeglądarce oraz czasie i sposobie korzystania ze strony, w zakresie wynikającym z działania infrastruktury.' 
                : 'The technical infrastructure provider may process technical data related to the use of the website, in particular the IP address, device information, browser, and the time and manner of using the website, to the extent resulting from the operation of the infrastructure.'}
            </p>
            <p>
              {isPl 
                ? 'Dane techniczne mogą być przetwarzane w szczególności w celu zapewnienia bezpieczeństwa, stabilności i prawidłowego działania strony.' 
                : 'Technical data may be processed in particular to ensure security, stability, and the proper functioning of the website.'}
            </p>

            <h2>{isPl ? '§8. Adres IP i dane techniczne' : '§8. IP address and technical data'}</h2>
            <p>
              {isPl 
                ? 'Podczas korzystania ze strony internetowej mogą być automatycznie przetwarzane dane techniczne, takie jak adres IP, informacje dotyczące urządzenia, przeglądarki, systemu operacyjnego oraz podstawowe informacje dotyczące sposobu korzystania ze strony.' 
                : 'When using the website, technical data such as IP address, device information, browser, operating system, and basic information regarding the way the website is used may be automatically processed.'}
            </p>
            <p>
              {isPl 
                ? 'Dane te mogą być wykorzystywane w szczególności w celu zapewnienia bezpieczeństwa strony, wykrywania nadużyć, prowadzenia statystyk technicznych oraz zapewnienia prawidłowego działania infrastruktury.' 
                : 'This data may be used in particular to ensure website security, detect abuse, keep technical statistics, and ensure the proper functioning of the infrastructure.'}
            </p>
            <p>
              {isPl 
                ? 'Administrator nie wykorzystuje tych danych do podejmowania wobec użytkownika decyzji wywołujących skutki prawne lub w podobny sposób istotnie na niego wpływających.' 
                : 'The Administrator does not use this data to make decisions towards the user that produce legal effects or similarly significantly affect them.'}
            </p>

            <h2>{isPl ? '§9. Okres przechowywania danych' : '§9. Data retention period'}</h2>
            <p>
              {isPl 
                ? 'Dane osobowe są przechowywane przez okres nie dłuższy niż jest to niezbędne do realizacji celu, dla którego zostały zebrane, z uwzględnieniem obowiązków prawnych oraz możliwości dochodzenia lub obrony przed roszczeniami.' 
                : 'Personal data is stored for no longer than necessary to achieve the purpose for which it was collected, taking into account legal obligations and the possibility of pursuing or defending against claims.'}
            </p>
            <p>
              {isPl 
                ? 'Dane związane z korespondencją mogą być przechowywane przez okres niezbędny do udzielenia odpowiedzi i zakończenia sprawy, a następnie przez okres uzasadniony potrzebą zabezpieczenia przed ewentualnymi roszczeniami.' 
                : 'Data related to correspondence may be stored for the period necessary to respond and close the case, and then for a period justified by the need to secure against potential claims.'}
            </p>
            <p>
              {isPl 
                ? 'Dane związane z zawartą umową mogą być przechowywane przez okres wymagany przepisami prawa dotyczącymi m.in. dokumentacji księgowej i podatkowej oraz przez okres niezbędny do ochrony przed roszczeniami.' 
                : 'Data related to the concluded contract may be stored for the period required by law regarding, among others, accounting and tax documentation, and for the period necessary for protection against claims.'}
            </p>

            <h2>{isPl ? '§10. Prawa osoby, której dane dotyczą' : '§10. Rights of the data subject'}</h2>
            <p>{isPl ? 'Osobie, której dane dotyczą, przysługuje – na zasadach określonych w RODO – prawo do:' : 'The data subject has the right – on the terms specified in the GDPR – to:'}</p>
            <ul>
              <li>{isPl ? 'a) dostępu do swoich danych osobowych,' : 'a) access their personal data,'}</li>
              <li>{isPl ? 'b) sprostowania danych,' : 'b) rectification of data,'}</li>
              <li>{isPl ? 'c) usunięcia danych,' : 'c) deletion of data,'}</li>
              <li>{isPl ? 'd) ograniczenia przetwarzania danych,' : 'd) restriction of data processing,'}</li>
              <li>{isPl ? 'e) przenoszenia danych – w przypadkach przewidzianych prawem,' : 'e) data portability – in cases provided by law,'}</li>
              <li>{isPl ? 'f) wniesienia sprzeciwu wobec przetwarzania danych opartego na art. 6 ust. 1 lit. f RODO,' : 'f) object to data processing based on Article 6(1)(f) GDPR,'}</li>
              <li>{isPl ? 'g) cofnięcia zgody w dowolnym momencie, jeżeli przetwarzanie odbywa się na podstawie zgody.' : 'g) withdraw consent at any time, if processing is based on consent.'}</li>
            </ul>
            <p>{isPl ? 'Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem.' : 'The withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.'}</p>
            <p>{isPl ? 'Osobie, której dane dotyczą, przysługuje również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeżeli uzna, że jej dane są przetwarzane niezgodnie z obowiązującymi przepisami prawa.' : 'The data subject also has the right to lodge a complaint with the President of the Personal Data Protection Office if they consider that their data is processed in violation of applicable laws.'}</p>

            <h2>{isPl ? '§11. Dobrowolność podania danych' : '§11. Voluntary provision of data'}</h2>
            <p>{isPl ? 'Podanie danych osobowych jest dobrowolne.' : 'Providing personal data is voluntary.'}</p>
            <p>{isPl ? 'Niepodanie danych wymaganych do obsługi zapytania, zawarcia umowy lub realizacji zamówienia może uniemożliwić odpowiedź na wiadomość, przygotowanie oferty albo wykonanie umowy.' : 'Failure to provide data required to handle an inquiry, conclude a contract, or execute an order may prevent responding to a message, preparing an offer, or executing a contract.'}</p>

            <h2>{isPl ? '§12. Pliki cookies' : '§12. Cookies'}</h2>
            <p>{isPl ? 'Strona internetowa może wykorzystywać pliki cookies oraz podobne technologie.' : 'The website may use cookies and similar technologies.'}</p>
            <p>{isPl ? 'Pliki cookies mogą być wykorzystywane w szczególności w celu:' : 'Cookies may be used in particular to:'}</p>
            <ul>
              <li>{isPl ? 'a) zapewnienia prawidłowego działania strony,' : 'a) ensure the proper functioning of the website,'}</li>
              <li>{isPl ? 'b) zapewnienia bezpieczeństwa,' : 'b) ensure security,'}</li>
              <li>{isPl ? 'c) zapamiętania ustawień lub preferencji użytkownika, jeżeli takie funkcje są wykorzystywane.' : 'c) remember user settings or preferences, if such functions are used.'}</li>
            </ul>
            <p>
              {isPl 
                ? 'Administrator nie wykorzystuje plików cookies do celów reklamowych ani do profilowania użytkowników, chyba że w przyszłości na stronie zostaną wdrożone odpowiednie narzędzia wymagające odrębnej podstawy prawnej i odpowiedniej informacji.' 
                : 'The Administrator does not use cookies for advertising purposes or user profiling, unless appropriate tools requiring a separate legal basis and relevant information are implemented on the website in the future.'}
            </p>
            <p>
              {isPl 
                ? 'Użytkownik może zmienić ustawienia dotyczące plików cookies w ustawieniach swojej przeglądarki internetowej.' 
                : 'The user can change cookie settings in their internet browser settings.'}
            </p>

            <h2>{isPl ? '§13. Automatyczne podejmowanie decyzji i profilowanie' : '§13. Automated decision making and profiling'}</h2>
            <p>
              {isPl 
                ? 'Dane osobowe użytkowników nie są wykorzystywane przez Administratora do podejmowania decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, które wywoływałyby wobec użytkownika skutki prawne lub w podobny sposób istotnie na niego wpływały.' 
                : 'Users\' personal data is not used by the Administrator to make decisions based solely on automated processing, which would produce legal effects concerning the user or similarly significantly affect them.'}
            </p>
            <p>{isPl ? 'Administrator nie prowadzi profilowania użytkowników w celach reklamowych.' : 'The Administrator does not profile users for advertising purposes.'}</p>

            <h2>{isPl ? '§14. Przekazywanie danych poza Europejski Obszar Gospodarczy' : '§14. Data transfer outside the European Economic Area'}</h2>
            <p>
              {isPl 
                ? 'W związku z korzystaniem z niektórych usług zewnętrznych dane osobowe lub dane techniczne mogą być przetwarzane poza Europejskim Obszarem Gospodarczym, jeżeli dany dostawca posiada infrastrukturę lub podmioty przetwarzające dane poza EOG.' 
                : 'In connection with the use of certain external services, personal data or technical data may be processed outside the European Economic Area if a given provider has infrastructure or data processors outside the EEA.'}
            </p>
            <p>
              {isPl 
                ? 'W takim przypadku Administrator podejmuje działania wymagane przez obowiązujące przepisy prawa, w szczególności dotyczące zapewnienia odpowiedniego poziomu ochrony danych.' 
                : 'In such a case, the Administrator takes actions required by applicable legal provisions, in particular regarding ensuring an adequate level of data protection.'}
            </p>

            <h2>{isPl ? '§15. Zmiany Polityki Prywatności' : '§15. Changes to the Privacy Policy'}</h2>
            <p>
              {isPl 
                ? 'Polityka Prywatności może być okresowo aktualizowana, w szczególności w przypadku zmiany przepisów prawa, zmiany sposobu działania strony lub korzystania z nowych usług technicznych.' 
                : 'The Privacy Policy may be periodically updated, in particular in the event of changes in legal provisions, changes in the way the website operates, or the use of new technical services.'}
            </p>
            <p>{isPl ? 'Aktualna wersja Polityki Prywatności jest publikowana na stronie juliakocur.arts.pl.' : 'The current version of the Privacy Policy is published on juliakocur.arts.pl.'}</p>
          </div>
        ) : (
          <div className="legal-document-content">
            <h1 className="legal-page-title">
              {isPl ? 'REGULAMIN SPRZEDAŻY I REALIZACJI ZAMÓWIEŃ' : 'SALES AND ORDER FULFILLMENT REGULATIONS'}
            </h1>
            <p className="legal-subtitle-info">
              {isPl ? 'obowiązujący na stronie internetowej juliakocur.arts.pl' : 'applicable on the juliakocur.arts.pl website'}
            </p>

            <h2>{isPl ? '§1. Postanowienia ogólne' : '§1. General Provisions'}</h2>
            <p>
              {isPl 
                ? 'Niniejszy Regulamin określa zasady prezentowania oferty, składania i realizacji zamówień oraz zawierania umów sprzedaży Produktów przez Julię Kocur za pośrednictwem strony internetowej juliakocur.arts.pl, poczty elektronicznej oraz innych uzgodnionych z Klientem środków porozumiewania się na odległość.' 
                : 'These Regulations define the rules for presenting offers, placing and executing orders, and concluding sales contracts for Products by Julia Kocur via the juliakocur.arts.pl website, e-mail, and other means of distance communication agreed with the Client.'}
            </p>
            <p><strong>{isPl ? 'Sprzedawcą jest:' : 'The Seller is:'}</strong></p>
            <p>
              Julia Kocur<br />
              ul. Kaliska 6a/18<br />
              99-400 Łowicz<br />
              e-mail: juliakocur.arts@gmail.com<br />
              telefon: +48 729 845 609<br />
              Instagram: @julia_kocur_arts<br />
              {isPl ? 'dalej zwana „Sprzedawcą”.' : 'hereinafter referred to as the "Seller".'}
            </p>
            <p>
              {isPl 
                ? 'Zamówienia mogą być składane za pośrednictwem poczty elektronicznej, formularza kontaktowego dostępnego na stronie internetowej oraz wiadomości za pośrednictwem profilu Instagram @julia_kocur_arts.' 
                : 'Orders may be placed via e-mail, the contact form available on the website, and messages via the Instagram profile @julia_kocur_arts.'}
            </p>
            <p>
              {isPl 
                ? 'Regulamin jest skierowany w szczególności do osób dokonujących zakupu Produktów w celu niezwiązanym bezpośrednio z ich działalnością gospodarczą lub zawodową.' 
                : 'The Regulations are addressed in particular to persons purchasing Products for purposes not directly related to their business or professional activity.'}
            </p>
            <p>
              {isPl 
                ? 'W zakresie, w jakim bezwzględnie obowiązujące przepisy prawa przyznają Klientowi będącemu Konsumentem określone prawa, postanowienia Regulaminu nie ograniczają tych praw.' 
                : 'To the extent that mandatory provisions of law grant a Client who is a Consumer certain rights, the provisions of these Regulations do not limit those rights.'}
            </p>

            <h2>{isPl ? '§2. Oferta i Produkty' : '§2. Offer and Products'}</h2>
            <p>{isPl ? 'Przedmiotem sprzedaży są w szczególności:' : 'The subject of sale is in particular:'}</p>
            <ul>
              <li>{isPl ? 'a) zegary ścienne,' : 'a) wall clocks,'}</li>
              <li>{isPl ? 'b) obrazy,' : 'b) paintings,'}</li>
              <li>{isPl ? 'c) dekoracyjne prace przestrzenne i inne autorskie formy dekoracyjne.' : 'c) decorative spatial works and other original decorative forms.'}</li>
            </ul>
            <p>{isPl ? 'Produkty mogą być wykonywane jako:' : 'Products may be manufactured as:'}</p>
            <ul>
              <li>{isPl ? 'a) gotowe, dostępne prace, albo' : 'a) ready-made, available works, or'}</li>
              <li>{isPl ? 'b) Produkty wykonywane na indywidualne zamówienie Klienta, zgodnie z ustalonymi indywidualnie parametrami, w szczególności dotyczącymi wymiaru, kolorystyki, formy lub innych cech Produktu.' : 'b) Products made to the individual order of the Client, in accordance with individually agreed parameters, in particular regarding dimensions, colors, form, or other features of the Product.'}</li>
            </ul>
            <p>
              {isPl 
                ? 'Ze względu na ręczne i indywidualne wykonanie Produktów ich wygląd może nieznacznie różnić się od zdjęć prezentowanych na stronie internetowej, w szczególności w zakresie odcieni kolorów, faktury, rozmieszczenia elementów oraz innych cech wynikających z charakteru rękodzieła.' 
                : 'Due to the manual and individual production of the Products, their appearance may slightly differ from the photos presented on the website, in particular regarding color shades, texture, arrangement of elements, and other features resulting from the nature of handicraft.'}
            </p>
            <p>
              {isPl 
                ? 'Informacje dotyczące Produktów, w szczególności ich opis, wymiary, sposób wykonania, cena oraz dostępność, są każdorazowo przedstawiane Klientowi przed zawarciem umowy.' 
                : 'Information regarding the Products, in particular their description, dimensions, method of production, price, and availability, is presented to the Client each time before concluding the contract.'}
            </p>
            <p>
              {isPl 
                ? 'Zdjęcia i wizualizacje Produktów mają charakter poglądowy, chyba że z opisu danego Produktu wynika inaczej.' 
                : 'Photos and visualizations of the Products are for illustrative purposes only, unless the description of a given Product states otherwise.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku Produktów udostępnianych w sprzedaży na odległość Sprzedawca przekazuje informacje wymagane przez obowiązujące przepisy prawa, w tym informacje dotyczące identyfikacji Produktu, danych producenta oraz bezpieczeństwa Produktu, jeżeli mają zastosowanie.' 
                : 'In the case of Products made available for distance selling, the Seller provides information required by applicable laws, including information on product identification, manufacturer data, and product safety, if applicable.'}
            </p>

            <h2>{isPl ? '§3. Składanie zamówień i zawarcie umowy' : '§3. Placing orders and concluding the contract'}</h2>
            <p>{isPl ? 'Zamówienie może zostać złożone w szczególności:' : 'An order may be placed in particular:'}</p>
            <ul>
              <li>{isPl ? 'a) za pośrednictwem formularza kontaktowego na stronie internetowej,' : 'a) via the contact form on the website,'}</li>
              <li>{isPl ? 'b) za pośrednictwem poczty elektronicznej,' : 'b) via e-mail,'}</li>
              <li>{isPl ? 'c) za pośrednictwem wiadomości na profilu Instagram @julia_kocur_arts.' : 'c) via a message on the Instagram profile @julia_kocur_arts.'}</li>
            </ul>
            <p>
              {isPl 
                ? 'W przypadku Produktu wykonywanego na indywidualne zamówienie Sprzedawca ustala z Klientem w szczególności zakres prac, parametry Produktu, cenę, przewidywany termin realizacji oraz sposób dostawy lub odbioru.' 
                : 'In the case of a Product made to an individual order, the Seller agrees with the Client in particular on the scope of work, Product parameters, price, estimated completion time, and method of delivery or collection.'}
            </p>
            <p>
              {isPl 
                ? 'Przed zawarciem umowy Sprzedawca przekazuje Klientowi informacje niezbędne do podjęcia decyzji o zakupie, w szczególności dotyczące Produktu, ceny, sposobu płatności, wysokości i terminu zapłaty zaliczki, sposobu i kosztów dostawy oraz – w przypadku Produktu wykonywanego na indywidualne zamówienie – jego indywidualnych parametrów i przewidywanego terminu realizacji.' 
                : 'Before concluding the contract, the Seller provides the Client with information necessary to make a purchasing decision, in particular regarding the Product, price, method of payment, amount and deadline for paying the advance payment, method and costs of delivery, and – in the case of a Product made to individual order – its individual parameters and estimated completion time.'}
            </p>
            <p>
              {isPl 
                ? 'Sprzedawca przedstawia Klientowi ofertę zawierającą uzgodnione istotne warunki zamówienia. Umowa sprzedaży zostaje zawarta z chwilą, w której Klient zaakceptuje tę ofertę w wiadomości e-mail lub za pośrednictwem innego uzgodnionego przez Strony kanału komunikacji. Samo przesłanie zapytania lub zamówienia przez Klienta nie oznacza zawarcia umowy.' 
                : 'The Seller presents an offer to the Client containing the agreed essential terms of the order. The sales contract is concluded when the Client accepts this offer via e-mail or another communication channel agreed by the Parties. Merely sending an inquiry or order by the Client does not mean the conclusion of a contract.'}
            </p>
            <p>
              {isPl 
                ? 'Sprzedawca potwierdza zawarcie umowy, przesyłając Klientowi wiadomość zawierającą co najmniej określenie Produktu, cenę, uzgodniony sposób i termin płatności, sposób dostawy lub odbioru oraz przewidywany termin realizacji.' 
                : 'The Seller confirms the conclusion of the contract by sending the Client a message containing at least the description of the Product, price, agreed method and deadline of payment, method of delivery or collection, and estimated completion time.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku zamówienia indywidualnego rozpoczęcie realizacji następuje po zaksięgowaniu na rachunku Sprzedawcy zaliczki w wysokości 30% uzgodnionej ceny, chyba że Strony ustalą inaczej. Zaliczka stanowi część ceny Produktu.' 
                : 'In the case of a custom order, execution begins after crediting the Seller\'s account with an advance payment of 30% of the agreed price, unless the Parties agree otherwise. The advance payment constitutes a part of the Product price.'}
            </p>
            <p>
              {isPl 
                ? 'Jeżeli Klient nie wpłaci zaliczki w uzgodnionym terminie, Sprzedawca może wstrzymać rozpoczęcie realizacji do czasu jej zaksięgowania.' 
                : 'If the Client fails to pay the advance payment within the agreed timeframe, the Seller may suspend the start of execution until it is credited.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku braku zapłaty pozostałej części ceny w uzgodnionym terminie Sprzedawca może wstrzymać wydanie lub wysyłkę Produktu do czasu zaksięgowania pełnej ceny.' 
                : 'In the absence of payment of the remaining part of the price within the agreed deadline, the Seller may withhold the release or dispatch of the Product until the full price is credited.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku rezygnacji Klienta z realizacji Zamówienia indywidualnego po zawarciu umowy zasady wzajemnych rozliczeń Stron ustalane są z uwzględnieniem charakteru Zamówienia, zakresu wykonanych prac oraz obowiązujących przepisów prawa.' 
                : 'In the event of the Client\'s cancellation of a custom order after the conclusion of the contract, the rules for mutual settlements between the Parties are determined taking into account the nature of the Order, the scope of work performed, and applicable legal provisions.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku powstania obowiązku zwrotu całości lub części otrzymanej płatności, Sprzedawca dokonuje zwrotu na rachunek bankowy, z którego dokonano płatności, chyba że Klient i Sprzedawca uzgodnią inny sposób zwrotu.' 
                : 'In the event of an obligation to return all or part of the received payment, the Seller makes the refund to the bank account from which the payment was made, unless the Client and the Seller agree on another refund method.'}
            </p>

            <h2>{isPl ? '§4. Ceny i płatności' : '§4. Prices and payments'}</h2>
            <p>{isPl ? 'Ceny Produktów są podawane w złotych polskich (PLN).' : 'Product prices are given in Polish zlotys (PLN).'}</p>
            <p>{isPl ? 'Cena Produktu jest każdorazowo ustalana i przedstawiana Klientowi przed zawarciem umowy.' : 'The Product price is determined and presented to the Client each time before concluding the contract.'}</p>
            <p>
              {isPl 
                ? 'W przypadku zamówień realizowanych poza terytorium Polski cena Produktu oraz koszt dostawy mogą być ustalane indywidualnie, z uwzględnieniem kraju dostawy, sposobu transportu oraz innych kosztów związanych z realizacją zamówienia.' 
                : 'In the case of orders executed outside Poland, the Product price and delivery cost may be determined individually, taking into account the country of delivery, method of transport, and other costs associated with the order.'}
            </p>
            <p>
              {isPl 
                ? 'W przypadku płatności w walucie innej niż PLN kwota do zapłaty oraz sposób jej przeliczenia są ustalane i przedstawiane Klientowi przed zawarciem umowy.' 
                : 'In the case of payment in a currency other than PLN, the amount to be paid and the method of its conversion are determined and presented to the Client before concluding the contract.'}
            </p>
            <p>{isPl ? 'Aktualnie podstawową formą płatności jest przelew bankowy na rachunek wskazany przez Sprzedawcę.' : 'Currently, the primary form of payment is bank transfer to the account indicated by the Seller.'}</p>
            <p>{isPl ? 'W przypadku zamówienia indywidualnego Klient wpłaca zaliczkę w wysokości 30% ceny ustalonej za realizację zamówienia.' : 'In the case of a custom order, the Client pays an advance payment of 30% of the price agreed for the execution of the order.'}</p>
            <p>{isPl ? 'Pozostała część ceny jest płatna w terminie ustalonym indywidualnie z Klientem, co do zasady przed wysyłką Produktu lub przy jego odbiorze osobistym.' : 'The remaining part of the price is payable within a deadline agreed individually with the Client, as a rule before the dispatch of the Product or upon personal collection.'}</p>
            <p>{isPl ? 'Za dzień zapłaty uznaje się dzień zaksięgowania środków na rachunku bankowym Sprzedawcy.' : 'The day of payment is considered to be the day the funds are credited to the Seller\'s bank account.'}</p>

            <h2>{isPl ? '§5. Realizacja, dostawa i odbiór osobisty' : '§5. Execution, delivery and personal collection'}</h2>
            <p>
              {isPl 
                ? 'Termin realizacji Produktu wykonywanego na indywidualne zamówienie jest ustalany indywidualnie z Klientem, z uwzględnieniem charakteru, rozmiaru oraz stopnia skomplikowania zamówienia. Bieg terminu realizacji rozpoczyna się od dnia zaksięgowania zaliczki, chyba że Strony ustalą inaczej.' 
                : 'The completion time for a Product made to individual order is agreed individually with the Client, taking into account the nature, size, and complexity of the order. The completion period begins on the day the advance payment is credited, unless the Parties agree otherwise.'}
            </p>
            <p>{isPl ? 'Dostawa może być realizowana na terenie Polski oraz do innych krajów, jeżeli Sprzedawca potwierdzi możliwość realizacji dostawy do danego kraju.' : 'Delivery can be made within Poland and to other countries if the Seller confirms the possibility of delivery to a given country.'}</p>
            <p>{isPl ? 'Dostawa może być realizowana za pośrednictwem wybranego przez Sprzedawcę lub uzgodnionego z Klientem operatora pocztowego lub firmy kurierskiej.' : 'Delivery can be carried out via a postal operator or courier company chosen by the Seller or agreed upon with the Client.'}</p>
            <p>{isPl ? 'Dostępne sposoby dostawy oraz ich koszt są każdorazowo przedstawiane Klientowi przed zawarciem umowy.' : 'Available delivery methods and their costs are presented to the Client each time before concluding the contract.'}</p>
            <p>{isPl ? 'W przypadku dostawy zagranicznej koszt transportu jest ustalany indywidualnie w zależności od kraju dostawy, wymiarów i wagi przesyłki oraz wybranego sposobu transportu.' : 'In the case of international delivery, the transport cost is determined individually depending on the country of delivery, dimensions and weight of the shipment, and the chosen transport method.'}</p>
            <p>{isPl ? 'Możliwy jest odbiór osobisty Produktu w Łowiczu, po wcześniejszym uzgodnieniu terminu ze Sprzedawcą.' : 'Personal collection of the Product is possible in Łowicz, after prior arrangement of the date with the Seller.'}</p>
            <p>{isPl ? 'Ryzyko przypadkowej utraty lub uszkodzenia Produktu przechodzi na Konsumenta z chwilą wydania Produktu Konsumentowi lub wskazanej przez niego osobie, innej niż przewoźnik, zgodnie z obowiązującymi przepisami prawa.' : 'The risk of accidental loss or damage to the Product passes to the Consumer upon delivery of the Product to the Consumer or a person designated by them other than the carrier, in accordance with applicable laws.'}</p>
            <p>{isPl ? 'W przypadku dostawy do kraju poza Polską Klient może być zobowiązany do poniesienia należności publicznoprawnych, opłat celnych, podatków lub innych opłat związanych z importem Produktu, jeżeli wynikają one z przepisów obowiązujących w kraju dostawy.' : 'In the case of delivery to a country outside Poland, the Client may be required to bear public levies, customs duties, taxes, or other fees associated with the import of the Product, if they result from regulations in force in the country of delivery.'}</p>

            <h2>{isPl ? '§6. Prawo odstąpienia od umowy' : '§6. Right of withdrawal'}</h2>
            <p>{isPl ? 'Konsument, który zawarł ze Sprzedawcą umowę na odległość, co do zasady ma prawo odstąpić od umowy w terminie 14 dni bez podawania przyczyny, z zastrzeżeniem wyjątków określonych w obowiązujących przepisach prawa.' : 'A Consumer who has concluded a distance contract with the Seller generally has the right to withdraw from the contract within 14 days without giving a reason, subject to exceptions specified in applicable laws.'}</p>
            <p>{isPl ? 'Prawo odstąpienia od umowy nie przysługuje Konsumentowi w odniesieniu do umowy, której przedmiotem jest Produkt nieprefabrykowany, wyprodukowany według specyfikacji Konsumenta lub służący zaspokojeniu jego zindywidualizowanych potrzeb, w przypadkach przewidzianych w obowiązujących przepisach prawa.' : 'The right of withdrawal does not apply to the Consumer in respect of contracts for a non-prefabricated product, manufactured according to the Consumer\'s specifications or serving to satisfy their individualized needs, in cases provided for by applicable law.'}</p>
            <p>{isPl ? 'Za Produkt wykonywany na indywidualne zamówienie może zostać uznany w szczególności Produkt wykonany zgodnie z indywidualnymi ustaleniami z Klientem, dotyczącymi jego wymiaru, formy, kolorystyki, układu elementów lub innych indywidualnych cech.' : 'A Product made to an individual order may be considered in particular a Product made in accordance with individual arrangements with the Client regarding its dimensions, form, colors, arrangement of elements, or other individual features.'}</p>
            <p>{isPl ? 'Jeżeli prawo odstąpienia od umowy przysługuje Konsumentowi, oświadczenie o odstąpieniu może zostać złożone w szczególności drogą elektroniczną na adres e-mail: juliakocur.arts@gmail.com.' : 'If the Consumer is entitled to the right of withdrawal, the withdrawal statement may be submitted in particular electronically to the e-mail address: juliakocur.arts@gmail.com.'}</p>
            <p>{isPl ? 'Konsument może skorzystać z ustawowego wzoru formularza odstąpienia od umowy, jednak skorzystanie z formularza nie jest obowiązkowe.' : 'The Consumer may use the statutory model withdrawal form, however, using the form is not mandatory.'}</p>
            <p>{isPl ? 'W przypadku skutecznego odstąpienia od umowy Sprzedawca dokonuje zwrotu płatności na zasadach i w terminach wynikających z obowiązujących przepisów prawa.' : 'In the event of effective withdrawal from the contract, the Seller refunds payments on the terms and within the time limits resulting from applicable legal provisions.'}</p>
            <p>{isPl ? 'Bezpośrednie koszty zwrotu Produktu ponosi Konsument, jeżeli obowiązek ich poniesienia wynika z obowiązujących przepisów prawa.' : 'The direct costs of returning the Product are borne by the Consumer, if the obligation to bear them results from applicable law.'}</p>

            <h2>{isPl ? '§7. Reklamacje i zgodność Produktu z umową' : '§7. Complaints and product conformity'}</h2>
            <p>{isPl ? 'Sprzedawca ponosi wobec Konsumenta odpowiedzialność za brak zgodności Produktu z umową na zasadach określonych w obowiązujących przepisach prawa.' : 'The Seller is liable to the Consumer for the lack of conformity of the Product with the contract on the terms specified in applicable laws.'}</p>
            <p>{isPl ? 'Reklamację można złożyć drogą elektroniczną na adres: juliakocur.arts@gmail.com.' : 'A complaint can be submitted electronically to: juliakocur.arts@gmail.com.'}</p>
            <p>{isPl ? 'W reklamacji zaleca się podanie danych umożliwiających identyfikację Klienta i zamówienia, opisu stwierdzonej niezgodności Produktu z umową oraz żądania Klienta.' : 'In the complaint, it is recommended to provide data enabling the identification of the Client and the order, a description of the found non-conformity of the Product with the contract, and the Client\'s demand.'}</p>
            <p>{isPl ? 'Konsument może korzystać z uprawnień przewidzianych w przepisach prawa, w szczególności w zakresie naprawy lub wymiany Produktu, a w przypadkach przewidzianych prawem również obniżenia ceny albo odstąpienia od umowy.' : 'The Consumer may exercise rights provided for in legal provisions, in particular regarding the repair or replacement of the Product, and in cases provided by law also price reduction or withdrawal from the contract.'}</p>
            <p>{isPl ? 'Sprzedawca odpowiada na reklamację Konsumenta w terminie 14 dni od dnia jej otrzymania, jeżeli obowiązek odpowiedzi w tym terminie wynika z obowiązujących przepisów prawa.' : 'The Seller responds to the Consumer\'s complaint within 14 days of its receipt, if the obligation to respond within this period results from applicable law.'}</p>
            <p>{isPl ? 'Jeżeli dla rozpatrzenia reklamacji konieczne jest dostarczenie Produktu Sprzedawcy, sposób i termin jego przekazania zostaną uzgodnione z Klientem.' : 'If it is necessary to deliver the Product to the Seller to examine the complaint, the method and date of its delivery will be agreed with the Client.'}</p>
            <p>{isPl ? 'W przypadku uznania reklamacji koszty naprawy, wymiany lub inne koszty obciążające Sprzedawcę są ponoszone na zasadach określonych w obowiązujących przepisach prawa.' : 'In the event of accepting the complaint, the costs of repair, replacement, or other costs encumbering the Seller shall be borne on the terms set out in applicable laws.'}</p>
            <p>{isPl ? 'Postanowienia niniejszego paragrafu nie ograniczają uprawnień Konsumenta wynikających z bezwzględnie obowiązujących przepisów prawa.' : 'The provisions of this paragraph do not limit the Consumer\'s rights resulting from mandatory provisions of law.'}</p>

            <h2>{isPl ? '§8. Bezpieczeństwo i użytkowanie Produktów' : '§8. Safety and use of Products'}</h2>
            <p>{isPl ? 'Produkty należy użytkować zgodnie z ich przeznaczeniem, opisem Produktu oraz przekazanymi przez Sprzedawcę informacjami dotyczącymi bezpiecznego użytkowania.' : 'Products must be used in accordance with their intended purpose, product description, and safe use information provided by the Seller.'}</p>
            <p>{isPl ? 'Produkty przeznaczone do zawieszenia na ścianie należy montować z wykorzystaniem odpowiedniego sposobu mocowania, dostosowanego do rodzaju ściany oraz ciężaru Produktu.' : 'Products intended for wall hanging must be installed using an appropriate mounting method adapted to the type of wall and the weight of the Product.'}</p>
            <p>{isPl ? 'W przypadku zegarów ściennych:' : 'In the case of wall clocks:'}</p>
            <ul>
              <li>{isPl ? 'a) zegary są zasilane baterią typu AA,' : 'a) clocks are powered by an AA battery,'}</li>
              <li>{isPl ? 'b) bateria nie jest dołączona do Produktu, chyba że wskazano inaczej,' : 'b) the battery is not included with the Product unless stated otherwise,'}</li>
              <li>{isPl ? 'c) podczas montażu należy upewnić się, że zastosowane mocowanie jest odpowiednie do ciężaru zegara i rodzaju ściany.' : 'c) during installation, make sure that the mounting used is suitable for the clock\'s weight and wall type.'}</li>
            </ul>
            <p>{isPl ? 'Produkty przestrzenne i dekoracyjne należy chronić przed silnymi uderzeniami, upadkiem oraz innymi działaniami mechanicznymi mogącymi prowadzić do ich uszkodzenia.' : 'Spatial and decorative products should be protected against strong impacts, falls, and other mechanical actions that may lead to their damage.'}</p>
            <p>{isPl ? 'Większe lub cięższe Produkty należy przenosić i montować z zachowaniem odpowiedniej ostrożności.' : 'Larger or heavier Products should be handled and installed with due care.'}</p>
            <p>{isPl ? 'Produktów dekoracyjnych nie należy wykorzystywać do celów innych niż ich przeznaczenie, w szczególności jako elementów konstrukcyjnych lub zabawek, chyba że z opisu konkretnego Produktu wynika inaczej.' : 'Decorative products should not be used for purposes other than their intended use, in particular as structural elements or toys, unless the description of a specific Product states otherwise.'}</p>
            <p>{isPl ? 'Szczegółowe informacje dotyczące bezpieczeństwa, montażu i użytkowania mogą być przekazywane wraz z Produktem oraz zamieszczane w jego indywidualnej ofercie.' : 'Detailed information regarding safety, installation, and use may be provided with the Product and included in its individual offer.'}</p>

            <h2>{isPl ? '§9. Dane osobowe' : '§9. Personal data'}</h2>
            <p>{isPl ? 'Administratorem danych osobowych Klientów jest Julia Kocur.' : 'The administrator of customers\' personal data is Julia Kocur.'}</p>
            <p><strong>{isPl ? 'Dane kontaktowe Administratora:' : 'Administrator\'s contact details:'}</strong></p>
            <p>
              ul. Kaliska 6a/18<br />
              99-400 Łowicz<br />
              e-mail: juliakocur.arts@gmail.com<br />
              telefon: +48 729 845 609
            </p>
            <p>{isPl ? 'Zasady przetwarzania danych osobowych zostały szczegółowo określone w Polityce Prywatności dostępnej na stronie juliakocur.arts.pl.' : 'The rules for processing personal data are detailed in the Privacy Policy available on juliakocur.arts.pl.'}</p>

            <h2>{isPl ? '§10. Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń' : '§10. Out-of-court complaint handling and redress'}</h2>
            <p>{isPl ? 'Konsument ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, jeżeli spełnione są warunki przewidziane w obowiązujących przepisach prawa.' : 'The Consumer has the opportunity to use out-of-court methods for dealing with complaints and pursuing claims, if the conditions provided for in applicable legal provisions are met.'}</p>
            <p>{isPl ? 'Skorzystanie z pozasądowych sposobów rozwiązywania sporów jest dobrowolne.' : 'Using out-of-court dispute resolution methods is voluntary.'}</p>

            <h2>{isPl ? '§11. Postanowienia końcowe' : '§11. Final provisions'}</h2>
            <p>{isPl ? 'Niniejszy Regulamin obowiązuje od dnia jego opublikowania na stronie internetowej juliakocur.arts.pl.' : 'These Regulations are effective from the date of publication on the juliakocur.arts.pl website.'}</p>
            <p>{isPl ? 'Sprzedawca może dokonywać zmian Regulaminu z ważnych przyczyn, w szczególności w przypadku zmiany przepisów prawa lub zmiany sposobu prowadzenia sprzedaży.' : 'The Seller may amend the Regulations for important reasons, in particular in the event of changes in legal provisions or changes in the method of conducting sales.'}</p>
            <p>{isPl ? 'Zmiany Regulaminu nie wpływają na prawa nabyte przez Klientów w związku z umowami zawartymi przed wejściem zmian w życie.' : 'Amendments to the Regulations do not affect acquired rights of Clients in connection with contracts concluded before the amendments enter into force.'}</p>
            <p>{isPl ? 'W sprawach nieuregulowanych w Regulaminie zastosowanie mają przepisy prawa polskiego, w szczególności przepisy Kodeksu cywilnego oraz ustawy o prawach konsumenta.' : 'In matters not regulated in these Regulations, the provisions of Polish law shall apply, in particular the provisions of the Civil Code and the Consumer Rights Act.'}</p>
            <p>{isPl ? 'W przypadku Konsumentów wszelkie postanowienia Regulaminu stosuje się z uwzględnieniem bezwzględnie obowiązujących przepisów prawa przyznających Konsumentom ochronę.' : 'In the case of Consumers, all provisions of the Regulations are applied taking into account mandatory legal provisions granting protection to Consumers.'}</p>
            <p>{isPl ? 'Wszelkie treści zamieszczone na stronie internetowej juliakocur.arts.pl, w szczególności zdjęcia, grafiki, projekty, opisy oraz materiały dotyczące Produktów, podlegają ochronie na zasadach określonych w obowiązujących przepisach prawa. Ich kopiowanie, rozpowszechnianie lub wykorzystywanie bez zgody uprawnionego jest niedozwolone, z wyjątkiem przypadków dozwolonych przez przepisy prawa.' : 'All content posted on the juliakocur.arts.pl website, in particular photos, graphics, designs, descriptions, and materials concerning the Products, are protected under the principles set out in applicable laws. Their copying, distribution, or use without the consent of the authorized person is prohibited, except as permitted by law.'}</p>
          </div>
        )}

        <div className="legal-back-wrapper">
          <Link 
            to={`/${currentLang}`} 
            className="legal-back-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {isPl ? '← Powrót na stronę główną' : '← Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
}