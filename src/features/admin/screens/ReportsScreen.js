import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import AdminLayout from '../layouts/AdminLayout';

const REPORTES = [
  { id: '1', titulo: 'Usuarios activos', fecha: '5 nov 2026', formato: 'PDF', peso: '1.2 MB', listo: true },
  { id: '2', titulo: 'Servicios publicados', fecha: '1 nov 2026', formato: 'Excel', peso: '860 KB', listo: true },
  { id: '3', titulo: 'Movimientos de créditos', fecha: '28 oct 2026', formato: 'CSV', peso: '420 KB', listo: true },
  { id: '4', titulo: 'Actividad mensual', fecha: '5 nov 2026', formato: 'PDF', peso: '—', listo: false },
];

export default function ReportsScreen({ navigate }) {
  const [filtro, setFiltro] = useState('Todos');
  const chips = ['Todos', 'Usuarios', 'Servicios', 'Créditos'];

  return (
    <AdminLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titulo}>Reportes</Text>
        <Text style={styles.subtitulo}>Historial de reportes generados</Text>

        <Pressable
          style={styles.boton}
          onPress={() => navigate && navigate('generateReport')}
        >
          <Text style={styles.textoBoton}>Generar reporte →</Text>
        </Pressable>

        <View style={styles.filaChips}>
          {chips.map((c) => (
            <Pressable
              key={c}
              onPress={() => setFiltro(c)}
              style={[styles.chip, filtro === c && styles.chipActivo]}
            >
              <Text style={[styles.textoChip, filtro === c && styles.textoChipActivo]}>
                {c}
              </Text>
            </Pressable>
          ))}
        </View>

        {REPORTES.map((r) => (
          <View key={r.id} style={styles.tarjeta}>
            <View style={styles.filaEncabezado}>
              <Text style={styles.reporteTitulo}>{r.titulo}</Text>
              <View style={[styles.badge, r.listo ? styles.badgeVerde : styles.badgeAmbar]}>
                <Text style={[styles.textoBadge, r.listo ? styles.textoVerde : styles.textoAmbar]}>
                  {r.listo ? 'Listo' : 'Procesando'}
                </Text>
              </View>
            </View>

            <Text style={styles.detalle}>
              {r.fecha} · {r.formato} · {r.peso}
            </Text>

            <View style={styles.filaAcciones}>
              <Text style={styles.accionPrincipal}>{r.listo ? 'Descargar' : 'Generando…'}</Text>
              <Text style={styles.accionSecundaria}>Ver detalle</Text>
            </View>
          </View>
        ))}

        <View style={{ height: 35 }} />
      </ScrollView>
    </AdminLayout>
  );
}

const styles = StyleSheet.create({
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#1f2937' },
  subtitulo: { fontSize: 13, color: '#64748b', marginBottom: 14 },
  boton: {
    backgroundColor: '#16805f',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 14,
  },
  textoBoton: { color: '#ffffff', fontSize: 15, fontWeight: 'bold' },
  filaChips: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  chipActivo: { backgroundColor: '#16805f', borderColor: '#16805f' },
  textoChip: { fontSize: 13, fontWeight: '600', color: '#64748b' },
  textoChipActivo: { color: '#ffffff' },
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 12,
  },
  filaEncabezado: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  reporteTitulo: { fontSize: 15, fontWeight: 'bold', color: '#1f2937' },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6 },
  badgeVerde: { backgroundColor: '#d1fae5' },
  badgeAmbar: { backgroundColor: '#fef3c7' },
  textoBadge: { fontSize: 11, fontWeight: 'bold' },
  textoVerde: { color: '#065f46' },
  textoAmbar: { color: '#92400e' },
  detalle: { fontSize: 13, color: '#64748b', marginBottom: 10 },
  filaAcciones: { flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#f1f5f9', paddingTop: 8 },
  accionPrincipal: { fontSize: 13, fontWeight: 'bold', color: '#16805f' },
  accionSecundaria: { fontSize: 13, color: '#64748b' },
});
