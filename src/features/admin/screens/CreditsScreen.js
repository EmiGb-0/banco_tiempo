import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import AdminLayout from '../layouts/AdminLayout';
 
// Constantes de diseño y tema
const colores = {
  primario: '#16805f',
  blanco: '#ffffff',
  texto: '#1f2937',
  secundario: '#64748b',
  borde: '#e2e8f0',
  fondoTarjeta: '#ffffff',
  rojo: '#b91c1c',
};
 
const espacio = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };
const radio = { sm: 6, md: 10, lg: 14 };
 

function Tarjeta({ children, style }) {
  return <View style={[componentEstilos.tarjeta, style]}>{children}</View>;
}
 
function Seccion({ titulo, accion, children }) {
  return (
    <View style={{ gap: espacio.sm }}>
      <View style={componentEstilos.seccionFila}>
        <Text style={componentEstilos.seccionTitulo}>{titulo}</Text>
        {accion ? <Text style={componentEstilos.seccionAccion}>{accion}</Text> : null}
      </View>
      {children}
    </View>
  );
}
 
function StatCard({ etiqueta, valor, detalle }) {
  return (
    <View style={componentEstilos.stat}>
      <Text style={componentEstilos.statEtiqueta}>{etiqueta}</Text>
      <Text style={componentEstilos.statValor}>{valor}</Text>
      {detalle ? <Text style={componentEstilos.statDetalle}>{detalle}</Text> : null}
    </View>
  );
}
 
function FilaLista({ icono, titulo, subtitulo, derecha, ultima }) {
  return (
    <View style={[componentEstilos.filaLista, !ultima && componentEstilos.filaListaBorde]}>
      <View style={componentEstilos.filaIconoContenedor}>
        <Text style={componentEstilos.filaIcono}>{icono}</Text>
      </View>
      <View style={componentEstilos.filaInfo}>
        <Text style={componentEstilos.filaTitulo}>{titulo}</Text>
        <Text style={componentEstilos.filaSubtitulo}>{subtitulo}</Text>
      </View>
      {derecha ? <View style={componentEstilos.filaDerecha}>{derecha}</View> : null}
    </View>
  );
}
 
const MOVIMIENTOS = [
  { usuario: 'Juan Carlos', concepto: 'Fotografía Profecional', creditos: '+2', positivo: true },
  { usuario: 'Maria Cruz', concepto: 'Segurista industrial', creditos: '−2', positivo: false },
  { usuario: 'Juan Ruiz', concepto: 'Reparación básica de Telefonos', creditos: '+1', positivo: true },
  { usuario: 'Lucero', concepto: 'Crédito de bienvenida', creditos: '+5', positivo: true },
];
 
export default function CreditsScreen() {
  return (
    <AdminLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, gap: espacio.lg }}
      >
        <View style={estilos.header}>
          <Text style={estilos.titulo}>Créditos</Text>
          <Text style={estilos.subtitulo}>Control de horas de la comunidad</Text>
        </View>
 
        <View style={estilos.banner}>
          <Text style={estilos.bannerEtiqueta}>Créditos en circulación</Text>
          <Text style={estilos.bannerValor}>4,560</Text>
          <Text style={estilos.bannerEtiqueta}>1 hora de servicio = 1 crédito</Text>
        </View>
 
        <View style={estilos.grid}>
          <StatCard etiqueta="Otorgados este mes" valor="+320" detalle="Bienvenida y bonos" />
          <StatCard etiqueta="Intercambiados" valor="1,248" detalle="Entre usuarios" />
        </View>
 
        <Seccion titulo="Configuración">
          <Tarjeta style={{ paddingVertical: 4 }}>
            <FilaLista
              icono="☺"
              titulo="Créditos de bienvenida"
              subtitulo="Se entregan al registrarse"
              derecha={<Text style={estilos.valor}>5</Text>}
            />
            <FilaLista
              icono="◷"
              titulo="Equivalencia por hora"
              subtitulo="Cálculo automático del servicio"
              derecha={<Text style={estilos.valor}>1</Text>}
              ultima
            />
          </Tarjeta>
        </Seccion>
 
        <Seccion titulo="Movimientos recientes" accion="Ver todo">
          <Tarjeta style={{ paddingVertical: 4 }}>
            {MOVIMIENTOS.map((m, i) => (
              <FilaLista
                key={m.usuario}
                icono={m.positivo ? '↗' : '↙'}
                titulo={m.usuario}
                subtitulo={m.concepto}
                ultima={i === MOVIMIENTOS.length - 1}
                derecha={
                  <Text style={[estilos.valor, !m.positivo && { color: colores.rojo }]}>
                    {m.creditos}
                  </Text>
                }
              />
            ))}
          </Tarjeta>
        </Seccion>
 
        <Pressable style={estilos.botonSecundario}>
          <Text style={estilos.botonSecundarioTexto}>Ajustar créditos</Text>
        </Pressable>
      </ScrollView>
    </AdminLayout>
  );
}
 
const componentEstilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: colores.fondoTarjeta,
    borderRadius: radio.md,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: espacio.md,
  },
  seccionFila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  seccionTitulo: { fontSize: 16, fontWeight: '700', color: colores.texto },
  seccionAccion: { fontSize: 13, fontWeight: '600', color: colores.primario },
  stat: {
    flexBasis: '47%',
    flexGrow: 1,
    backgroundColor: colores.fondoTarjeta,
    borderRadius: radio.md,
    borderWidth: 1,
    borderColor: colores.borde,
    padding: espacio.md,
    gap: 2,
  },
  statEtiqueta: { fontSize: 12, color: colores.secundario },
  statValor: { fontSize: 26, fontWeight: '800', color: colores.texto },
  statDetalle: { fontSize: 12, fontWeight: '600', color: colores.primario },
  filaLista: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: espacio.md,
    gap: espacio.md,
  },
  filaListaBorde: { borderBottomWidth: 1, borderBottomColor: '#f1f5f9' },
  filaIconoContenedor: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filaIcono: { fontSize: 16, color: colores.texto },
  filaInfo: { flex: 1, gap: 2 },
  filaTitulo: { fontSize: 14, fontWeight: '600', color: colores.texto },
  filaSubtitulo: { fontSize: 12, color: colores.secundario },
  filaDerecha: { alignItems: 'flex-end' },
});
 
const estilos = StyleSheet.create({
  header: { gap: 2 },
  titulo: { fontSize: 24, fontWeight: '800', color: colores.texto },
  subtitulo: { fontSize: 13, color: colores.secundario },
  banner: {
    backgroundColor: colores.primario,
    borderRadius: radio.lg,
    padding: espacio.lg,
    gap: 2,
  },
  bannerEtiqueta: { fontSize: 13, color: '#d1fae5' },
  bannerValor: { fontSize: 36, fontWeight: '800', color: colores.blanco },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: espacio.md },
  valor: { fontSize: 16, fontWeight: '800', color: colores.primario },
  botonSecundario: {
    backgroundColor: colores.fondoTarjeta,
    borderRadius: radio.md,
    borderWidth: 1,
    borderColor: colores.borde,
    alignItems: 'center',
    paddingVertical: 12,
  },
  botonSecundarioTexto: { fontSize: 14, fontWeight: '700', color: colores.primario },
});
 