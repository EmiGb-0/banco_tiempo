
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AdminLayout from '../layouts/AdminLayout';
 
// Constantes de diseño y tema
const colores = {
  primario: '#16805f',
  blanco: '#ffffff',
  texto: '#1f2937',
  secundario: '#64748b',
  borde: '#e2e8f0',
  fondoTarjeta: '#ffffff',
  verdeFondo: '#d1fae5',
};
 
const espacio = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };
const radio = { sm: 6, md: 10, lg: 14 };
 
// Componentes auxiliares
function Tarjeta({ children, style }) {
  return <View style={[componentEstilos.tarjeta, style]}>{children}</View>;
}
 
function Seccion({ titulo, children }) {
  return (
    <View style={{ gap: espacio.sm }}>
      <Text style={componentEstilos.seccionTitulo}>{titulo}</Text>
      {children}
    </View>
  );
}
 
function StatCard({ etiqueta, valor, detalle, destacada }) {
  return (
    <View style={[componentEstilos.stat, destacada && componentEstilos.statDestacada]}>
      <Text style={[componentEstilos.statEtiqueta, destacada && { color: '#d1fae5' }]}>{etiqueta}</Text>
      <Text style={[componentEstilos.statValor, destacada && { color: colores.blanco }]}>{valor}</Text>
      {detalle ? (
        <Text style={[componentEstilos.statDetalle, destacada && { color: '#d1fae5' }]}>{detalle}</Text>
      ) : null}
    </View>
  );
}
 
function Chip({ texto, activo }) {
  return (
    <View style={[componentEstilos.chip, activo && componentEstilos.chipActivo]}>
      <Text style={[componentEstilos.chipTexto, activo && { color: colores.blanco }]}>{texto}</Text>
    </View>
  );
}
 
const SEMANAS = [
  { etiqueta: 'S1', valor: 48 },
  { etiqueta: 'S2', valor: 72 },
  { etiqueta: 'S3', valor: 60 },
  { etiqueta: 'S4', valor: 95 },
  { etiqueta: 'S5', valor: 84 },
];
 
const CATEGORIAS = [
  { nombre: 'Educación', porcentaje: 82, total: 41 },
  { nombre: 'Creatividad', porcentaje: 62, total: 24 },
  { nombre: 'Tecnología', porcentaje: 50, total: 22 },
  { nombre: 'Hogar', porcentaje: 36, total: 18 },
];
 
export default function DashboardScreen() {
  return (
    <AdminLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, gap: espacio.lg }}
      >
        <View style={estilos.header}>
          <Text style={estilos.titulo}>Dashboard</Text>
          <Text style={estilos.subtitulo}>Noviembre 2026</Text>
        </View>
 
        <View style={estilos.fila}>
          <Chip texto="Semana" />
          <Chip texto="Mes" activo />
          <Chip texto="Año" />
        </View>
 
        <View style={estilos.grid}>
          <StatCard etiqueta="Usuarios activos" valor="342" detalle="+5.6%" destacada />
          <StatCard etiqueta="Servicios publicados" valor="128" detalle="+4.9%" />
          <StatCard etiqueta="Horas intercambiadas" valor="1,248" detalle="+12%" />
          <StatCard etiqueta="Créditos en circulación" valor="4,560" />
        </View>
 
        <Seccion titulo="Horas intercambiadas por semana">
          <Tarjeta>
            <View style={estilos.grafica}>
              {SEMANAS.map((s) => (
                <View key={s.etiqueta} style={estilos.barraContenedor}>
                  <Text style={estilos.barraValor}>{s.valor}</Text>
                  <View style={[estilos.barra, { height: s.valor * 1.3 }]} />
                  <Text style={estilos.barraEtiqueta}>{s.etiqueta}</Text>
                </View>
              ))}
            </View>
          </Tarjeta>
        </Seccion>
 
        <Seccion titulo="Categorías más solicitadas">
          <Tarjeta style={{ gap: espacio.md }}>
            {CATEGORIAS.map((c) => (
              <View key={c.nombre} style={{ gap: 6 }}>
                <View style={estilos.filaEntre}>
                  <Text style={estilos.categoriaNombre}>{c.nombre}</Text>
                  <Text style={estilos.barraEtiqueta}>{c.total} servicios</Text>
                </View>
                <View style={estilos.progresoFondo}>
                  <View style={[estilos.progreso, { width: `${c.porcentaje}%` }]} />
                </View>
              </View>
            ))}
          </Tarjeta>
        </Seccion>
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
  seccionTitulo: { fontSize: 16, fontWeight: '700', color: colores.texto },
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
  statDestacada: { backgroundColor: colores.primario, borderColor: colores.primario },
  statEtiqueta: { fontSize: 12, color: colores.secundario },
  statValor: { fontSize: 26, fontWeight: '800', color: colores.texto },
  statDetalle: { fontSize: 12, fontWeight: '600', color: colores.primario },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: colores.fondoTarjeta,
    borderWidth: 1,
    borderColor: colores.borde,
  },
  chipActivo: { backgroundColor: colores.primario, borderColor: colores.primario },
  chipTexto: { fontSize: 13, fontWeight: '600', color: colores.secundario },
});
 
const estilos = StyleSheet.create({
  header: { gap: 2 },
  titulo: { fontSize: 24, fontWeight: '800', color: colores.texto },
  subtitulo: { fontSize: 13, color: colores.secundario },
  fila: { flexDirection: 'row', gap: espacio.sm },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: espacio.md },
  grafica: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-around', height: 170 },
  barraContenedor: { alignItems: 'center', gap: 4 },
  barra: { width: 28, backgroundColor: colores.primario, borderRadius: radio.sm },
  barraValor: { fontSize: 12, fontWeight: '700', color: colores.texto },
  barraEtiqueta: { fontSize: 12, color: colores.secundario },
  filaEntre: { flexDirection: 'row', justifyContent: 'space-between' },
  categoriaNombre: { fontSize: 14, color: colores.texto },
  progresoFondo: { height: 8, borderRadius: 999, backgroundColor: colores.verdeFondo },
  progreso: { height: 8, borderRadius: 999, backgroundColor: colores.primario },
});