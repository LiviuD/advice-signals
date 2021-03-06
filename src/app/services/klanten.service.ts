import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Klanten } from '../models/klanten';

@Injectable({
  providedIn: 'root'
})
export class KlantenService {
  selectedClient: any;

  constructor(private http: HttpClient) { 
  }

  getClient(id: number): Klanten {
    //TODO: make a call to an API to get the clinet with the given id, until then we're just mocking it
   this.selectedClient = {
    Id: 1,
    ClientName: "Bakker, L.",
    BsnFi: 262169366,
    AdviceSignals: [{
       CreateDate: new Date(2020, 11, 26),
       Title: "Mogelijk niet voldoende geld gereserveerd voor de oude dag?",
       Status: 100,
        Klantgegevens: {
          Origin: "IB 2020",
          Paramters: [{
              ParmName: "Waarde aanmerkelijk belang",
             ParmValue: 50000
            }
          ]
        },
        Description: "Wanneer de bestuurder wegens omstandigheden tijdelijk niet meer in staat is de vennootschap te leiden, kan een vacuüm ontstaan: hij kan geen besluiten meer nemen. Vooral bij directeur-enig aandeelhouder bestaat dat gevaar. Het is raadzaam om bij de jaarlijkse algemene vergadering de tijdelijke waarneming als agendapunt op te nemen."
      }, {
       CreateDate: new Date(2020, 9, 12),
       Title: "Waardesprong resulteert in €13.589 meer Box 3 Belasting",
       Status: 200,
        Klantgegevens: {
          Origin: "IB 2020",
          Paramters: [{
              ParmName: "Aandelen, obligatied e.d",
             ParmValue: "200000"
            }, {
              ParmName: "Box 3 belasting",
             ParmValue: "2143"
            }, {
              ParmName: "Fiscaal partner?",
             ParmValue: "Nee"
            }
          ]
        },
        Description: "De vrijstelling voor groene beleggingen is een vrij eenvoudige manier voor uw cliënt om de grondslag voor sparen en beleggen te verlagen en belasting te besparen."
      }, {
       CreateDate: new Date(2020, 8, 26),
       Title: "Meer aflossen is fiscaal voordeliger dan sparen in Box 3",
       Status: 200,
        Klantgegevens: {
          Origin: "IB 2020",
          Paramters: [{
              ParmName: "Totaal bank- en aandelenvermogen",
             ParmValue: "80000"
            }, {
              ParmName: "Gemiddelde toename bank- en aandeelvermogen (%)",
             ParmValue: "95%"
            }, {
              ParmName: "Laatste belastingaangifte",
             ParmValue: "2017"
            }, {
              ParmName: "Gemiddelde toename bank- en aandeelvermogen (€)",
             ParmValue: "40000"
            }
          ]
        },
        Description: "Wij zijn bij de berekening van de belastingdruk uitgegaan van het rendement zoals deze gemiddeld in de markt wordt behaald. Het werkelijk behaalde/te behalen rendement door uw cliënt kan hiervan afwijken en daardoor ook de door ons berekende belastingdruk van de twee boxen. Wij raden daarom aan om de daadwerkelijke belastingdruk na te rekenen op basis van de actuele gegevens van uw cliënt om na te gaan of overheveling naar box 3 interessant is voor uw cliënt.<br><br> Het box-3-vermogen kan worden overgeheveld naar box 2 door het in te brengen in een (nieuw op te richten) eigen BV of een fonds voor gemene rekening aan te gaan.<br><br> Met dit signaal beogen wij u een richtlijn te geven om deze mogelijkheid met uw cliënten nader te bekijken."
      }, {
        CreateDate: new Date(2020, 7, 26),
       Title: "Verplichtingen rondom tijdelijk verhuur eigen woning?",
       Status: 200,
        Klantgegevens: {
          Origin: "IB 2020",
          Paramters: [{
              ParmName: "Woning rente",
             ParmValue: "4500"
            }, {
              ParmName: "Eigenwoningschuld 31/12",
             ParmValue: "190000"
            }, {
              ParmName: "Belasting box 3",
             ParmValue: "2346"
            }, {
              ParmName: "Heffinsvrij vermogen + aftrekbare schulden",
             ParmValue: "24437"
            }, {
              ParmName: "Eigenwoningforfait",
             ParmValue: "1350"
            }, {
              ParmName: "Belastbaar inkomen box 3",
             ParmValue: "7822"
            }, {
              ParmName: "Liquide middelen",
             ParmValue: "45000"
            }
          ]
        },
        Description: "Gezien de verhouding tussen de aftrek die wordt verkregen vanwege de eigenwoningschuld kan het fiscaal en financieel attractief zijn om de (resterende) eigenwoningschuld geheel of gedeeltelijk af te lossen door de aanwezige liquide middelen van box 3 aan te wenden.<br><br> Naast voordelen heeft het aflossen heeft ook nadelen. Als voorbeeld kan worden genoemd aan de gevolgen van de bijleenregeling wanneer uw cliënt verhuisd en de mogelijke toepassing van het nieuwe regime voor eigenwoningschulden dat sinds 2013 van kracht is.<br><br> Met dit signaal beogen wij u een richtlijn te geven om deze mogelijkheid met uw cliënten nader te bekijken."
      }, {
        CreateDate: new Date(2020, 11, 20),
       Title: "Belastingbesparing bij gedeeltelijk aflossen eigenwoningschuld",
       Status: 200,
        Klantgegevens: {
          Origin: "IB 2018",
          Paramters: [{
              ParmName: "Woning rente",
             ParmValue: "36000"
            }, {
              ParmName: "Belastbaar inkomen box 3",
             ParmValue: "110223"
            }, {
              ParmName: "Belasting box3",
             ParmValue: "6647"
            }, {
              ParmName: "Liquide middelen",
             ParmValue: "23801"
            }, {
              ParmName: "Eigenwoning forfait",
             ParmValue: "91722"
            }, {
              ParmName: "Eigenwoningschuld 31/12",
             ParmValue: "234256"
            }, {
              ParmName: "Heffinsvrij vermogen + aftrekbare schulden",
             ParmValue: "83090"
            }
          ]
        },
        Description: "Het kan fiscaal en financieel aantrekkelijk zijn om resterende eigenwoningschuld af te lossen met liquide middelen van box3.<br><br> Naast voordelen heeft het afslossen ook nadelen. Bijvoorbeeld de gevolgen van de bijleenregeling. Wanneer uw cliënt verhuist kan het nieuwe regime voor eigenwoningschulden toepassing vinden (dit regime is sinds 2013 van kracht)."
      }
    ]
   }
   return this.selectedClient;
}
}
