import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routers/RoutesApp'
import moment from 'moment'
import { Provider } from 'react-redux'
import store from './redux/states/StoreConfigure'
import { Suspense } from 'react'
import { Waveform } from '@uiball/loaders'

moment.locale('es', {
  weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  weekdaysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_'
    ),
  monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
})

function App() {

  return (
    <Suspense fallback={
      <div>
        <Waveform
          size={40}
          lineWeight={3.5}
          speed={1}
          color="black"
        />
      </div>
    }>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}

export default App
